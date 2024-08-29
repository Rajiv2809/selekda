<?php

use Illuminate\Http\Request;
use App\Http\Middleware\AdminAccess;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function() {


    Route::post('/blog-comment', [BannerController::class, 'create']);
    Route::get('/blog-comment', [BannerController::class, 'get']);
    Route::put('/blog-comment/{bannerID}', [BannerController::class, 'update']);
    Route::delete('/blog-comment/{bannerID}', [BannerController::class, 'delete']);

    Route::middleware([AdminAccess::class])->group(function () {
        Route::post('/banner', [BannerController::class, 'create']);
        Route::get('/banner', [BannerController::class, 'get']);
        Route::put('/banner/{bannerID}', [BannerController::class, 'update']);
        Route::delete('/banner/{bannerID}', [BannerController::class, 'delete']);

        Route::post('/blog', [BlogController::class, 'create']);
        Route::get('/blog', [BlogController::class, 'get']);
        Route::put('/blog/{bannerID}', [BlogController::class, 'update']);
        Route::delete('/blog/{bannerID}', [BlogController::class, 'delete']);
    });
});