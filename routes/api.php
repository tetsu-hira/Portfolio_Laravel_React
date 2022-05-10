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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ユーザー情報一覧を取得するルーティング
Route::get('/user',function (Request $request) {
  $users = App\Models\User::all();
  return response()->json(['users'=> $users]);
});

// ユーザーの詳細情報を取得するルーティング
Route::get('/user/{user}', function(App\Models\User $user){

	return response()->json(['user' => $user]);

});