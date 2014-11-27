<?php
use Dingo\Api\Routing\ControllerTrait;

class ApiController extends BaseController {
    public function tokenAction(){
        //oauth2
        //return Response::json(Authorizer::issueAccessToken());

        //jwt
        $credentials = Input::only('email', 'password');
        if ( ! $token = JWTAuth::attempt($credentials) ){
            // return 401 error response
        }
        return compact('token');
    }
}
