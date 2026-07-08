<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventController;

Route::prefix('api')->group(function () {
    Route::apiResource('/events', EventController::class);
    Route::post('/events/{id}/register', [EventController::class, 'register']);
    Route::post('/events/{id}/unregister', [EventController::class, 'unregister']);
});

