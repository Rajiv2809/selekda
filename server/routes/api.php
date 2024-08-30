<?php

use Illuminate\Http\Request;
use App\Http\Middleware\AdminAccess;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogCommentController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PortfolioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function() {
    Route::get('/me',[AuthController::class, 'me']);
    Route::post('/update/user',[AuthController::class, 'update']);

    Route::post('/blog-comment', [BlogCommentController::class, 'create']);
    Route::get('/blog-comment', [BlogCommentController::class, 'get']);
    Route::put('/blog-comment/{bannerID}', [BlogCommentController::class, 'update']);
    Route::delete('/blog-comment/{bannerID}', [BlogCommentController::class, 'delete']);

    Route::get('/banner', [BannerController::class, 'get']);
    Route::get('/blog', [BlogController::class, 'get']);
    Route::get('/portofolio', [PortfolioController::class, 'get']);
    Route::middleware([AdminAccess::class])->group(function () {
        Route::post('/banner', [BannerController::class, 'create']);
        Route::post('/banner/{bannerID}', [BannerController::class, 'update']);
        Route::delete('/banner/{bannerID}', [BannerController::class, 'delete']);

        Route::post('/blog', [BlogController::class, 'create']);
        Route::post('/blog/{blogId}', [BlogController::class, 'update']);
        Route::delete('/blog/{blogID}', [BlogController::class, 'delete']);
        
        Route::post('/portofolio', [PortfolioController::class, 'create']);
        Route::post('/portofolio/{portofolioID}', [PortfolioController::class, 'update']);
        Route::delete('/portofolio/{portofolioID}', [PortfolioController::class, 'delete']);

        
    });
});