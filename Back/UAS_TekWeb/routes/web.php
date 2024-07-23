<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\UserController;

// Home route to index jsx
Route::get('/', function () {
    return view('Index');
});

// User routes
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// Collection routes
// Route::get('/collections', [CollectionController::class, 'index']);
// Route::post('/collections', [CollectionController::class, 'store']);
// Route::get('/collections/{id}', [CollectionController::class, 'show']);
// Route::put('/collections/{id}', [CollectionController::class, 'update']);
// Route::delete('/collections/{id}', [CollectionController::class, 'destroy']);



Route::resource('collections', CollectionController::class);


