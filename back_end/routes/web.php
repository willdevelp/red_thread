<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenerateController;

Route::get('/', function () {
    return view('welcome');
});