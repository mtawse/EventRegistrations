<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventController;
 
Route::apiResource('api/events', EventController::class);
Route::post('/api/events/{id}/register', [EventController::class, 'register']);
Route::post('/api/events/{id}/unregister', [EventController::class, 'unregister']);

