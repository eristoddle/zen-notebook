<?php
class UsersTableSeeder extends Seeder {
    public function run(){
        User::create(array(
            'username' =>'admin',
            'password' => Hash::make('admin'),
            'is_admin' => true
        ));
        User::create(array(
            'username' =>'user',
            'password' => Hash::make('user'),
            'is_admin' => false
        ));
    }
}