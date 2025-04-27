<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PromotionsController;
use App\Http\Controllers\CertifController;
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

// Route::post('/promotion', [PromotionsController::class, 'store']);
// Route::get('/promotion', [PromotionsController::class, 'index']);
// Route::get('/promotion/{id}', [PromotionsController::class, 'show']);
// Route::delete('/promotion/{id}', [PromotionsController::class, 'destroy']);

Route::post('/upload-files', [CertifController::class, 'uploadFiles']);
Route::get('/upload-files/{reference_number}', [CertifController::class, 'show']);
Route::get('/download-file/${original_name}', [CertifController::class, 'downloadFile']);
?>
