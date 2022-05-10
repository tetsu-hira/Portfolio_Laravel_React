<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記
use Illuminate\Support\Str;           // Str使うなら追記

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      \App\Models\User::truncate();  // 既存データを削除する場合のみ
      \App\Models\User::factory(50)->create();  // 50個作成ね！
    }
}
