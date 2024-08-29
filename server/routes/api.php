<?php

use Illuminate\Http\Request;
use App\Http\Middleware\AdminAccess;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function() {



    Route::middleware([AdminAccess::class])->group(function () {
        Route::post('/banner', [BannerController::class, 'create']);
        Route::get('/banner', [BannerController::class, 'get']);
        Route::put('/banner/{bannerID}', [BannerController::class, 'update']);
        Route::delete('/banner/{bannerID}', [BannerController::class, 'delete']);
    });;
});