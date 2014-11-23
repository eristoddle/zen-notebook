<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration {

	/**
	 * Run the migrations.
	 *`
	 * @return void
	 */
	public function up()
	{
        Schema::create('users', function($table){
            $table->increments('id');
            $table->string('email');
            $table->string('username');
            $table->string('password', 64);
            $table->boolean('is_admin');
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop('users');
	}

}
