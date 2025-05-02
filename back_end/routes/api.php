<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ScanController;
use App\Http\Controllers\CertifController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getAuthenticatedUser']);
Route::middleware('auth:sanctum')->put('/user/update', [UserController::class, 'updateUser']);

// Route::post('/promotion', [PromotionsController::class, 'store']);
// Route::get('/promotion', [PromotionsController::class, 'index']);
// Route::get('/promotion/{id}', [PromotionsController::class, 'show']);
// Route::delete('/promotion/{id}', [PromotionsController::class, 'destroy']);

Route::post('/upload-files', [CertifController::class, 'uploadFiles']);
Route::get('/upload-files/{reference_number}', [CertifController::class, 'show']);
Route::get('/certifs', [CertifController::class, 'getCertifs']);
Route::get('/download-file/{reference_number}', [CertifController::class, 'download']);

Route::post('/handle-scan', [CertifController::class, 'handleScan']);
Route::get('/scans', [ScanController::class, 'getAllScans']);
Route::get('/scan-stats', [ScanController::class, 'getScanStats']);
?>
