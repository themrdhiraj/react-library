<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Departments
Route::get('/departments', 'LibraryController@getAllDepartments');
Route::post('/department', 'LibraryController@storeDepartment');
Route::delete('/department/{id}', 'LibraryController@deleteDepartment');

//Books
Route::get('/books', 'LibraryController@getAllBooks');
Route::post('/book/storeBook', 'LibraryController@storeBook');
Route::get('/book/{id}/getOneBook', 'LibraryController@getOneBook');
Route::put('/book/{id}/updateBook', 'LibraryController@updateBook');
Route::delete('/book/{id}', 'LibraryController@deleteBook');
