<?php
class UsersTableSeeder extends Seeder {
    public function run(){
        User::create(array(
            'username' =>'admin',
            'email' => 'stephanmil@gmail.com',
            'password' => Hash::make('admin'),
            'is_admin' => true
        ));
        User::create(array(
            'username' =>'user',
            'email' => 'eristoddle@gmail.com',
            'password' => Hash::make('user'),
            'is_admin' => false
        ));
    }
}