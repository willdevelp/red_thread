<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\Writer\PngWriter;
use Illuminate\Support\Facades\Storage;
use setasign\Fpdi\Fpdi;
use App\Models\Certif;

class CertifController extends Controller
{
    public function uploadFiles(Request $request)
    {
        $request->validate([
            'files.*' => 'file|mimes:pdf|max:2048',
        ]);

        $uploadFiles = $request->file('files');
        $processedFiles = [];

        foreach ($uploadFiles as $file) {
            try {
                $originalName = $file->getClientOriginalName();
                $referenceNumber = 'REF-' . uniqid();

                // Generate QR Code
                $qrCode = new Builder(
                    writer:new PngWriter(),
                    data: url('localhost:8000/'),
                    encoding:new Encoding('UTF-8'),
                    errorCorrectionLevel:ErrorCorrectionLevel::High,
                    size:200
                    
                );
                $result = $qrCode->build();
                // Save QR code temporarily
                $tempQrCodePath = storage_path('app/temp/qrcode_'.time().'.png');
                $result->saveToFile($tempQrCodePath);

                // Process PDF with FPDI
                $pdf = new Fpdi();
                
                // Get the original PDF content
                $originalPdfContent = file_get_contents($file->getRealPath());
                file_put_contents(storage_path('app/temp/original.pdf'), $originalPdfContent);
                
                $pageCount = $pdf->setSourceFile(storage_path('app/temp/original.pdf'));
                
                for ($pageNo = 1; $pageNo <= $pageCount; $pageNo++) {
                    $templateId = $pdf->importPage($pageNo);
                    $size = $pdf->getTemplateSize($templateId);
                    
                    $pdf->AddPage($size['orientation'], [$size['width'], $size['height']]);
                    $pdf->useTemplate($templateId);
                    
                    // Add QR code only to first page
                    if ($pageNo === 1) {
                        $qrCodeX = $size['width'] - 30;
                        $qrCodeY = $size['height'] - 30;
                        $pdf->Image($tempQrCodePath, $qrCodeX, $qrCodeY, 25, 25);
                    }
                }

                // Save modified PDF
                $newFileName = 'processed_'. $originalName;
                $pdfPath = 'processed_pdfs/'.$newFileName;
                
                // Ensure directory exists
                Storage::disk('public')->makeDirectory('processed_pdfs');
                
                $pdf->Output(storage_path('app/public/'.$pdfPath), 'F');

                $processedFiles[] = [
                    'original_name' => $originalName,
                    'reference_number' => $referenceNumber,
                    'processed_path' => $pdfPath,
                    'public_url' =>  Storage::disk('public')->url($pdfPath)
                ];

                // Clean up temp files
                @unlink($tempQrCodePath);
                @unlink(storage_path('app/temp/original.pdf'));

            } catch (\Exception $e) {
                // Log error and continue with next file
                \Log::error("Error processing file {$originalName}: ".$e->getMessage());
                continue;
            }
        }

        // Save to database
        if (!empty($processedFiles)) {
            Certif::insert($processedFiles);
        }

        return response()->json([
            'success' => true,
            'message' => count($processedFiles).' file(s) processed successfully',
            'files' => $processedFiles,
        ]);
    }

    public function show($reference_number)
    {
        $certificate = Certif::where('reference_number', $reference_number)->first();

        if (!$certificate) {
            return response()->json([
                'message' => 'Certificat non trouvé',
                'error' => 'Not Found'
            ], 404);
        }

        return response()->json($certificate);
    }

    public function download($reference_number)
    {
        $certificate = Certif::where('reference_number', $reference_number)->first();

        if (!$certificate) {
            return response()->json([
                'message' => 'Certificat non trouvé',
                'error' => 'Not Found'
            ], 404);
        }

        $filePath = storage_path('app/public/' . $certificate->processed_path);

        if (!file_exists($filePath)) {
            return response()->json([
                'message' => 'Fichier introuvable',
                'error' => 'Not Found'
            ], 404);
        }

        return response()->download($filePath, $certificate->original_name);
    }
}