<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->isReading($request) || $this->excludedRoutes($request) || $this->tokensMatch($request)) {
            return $this->addCookieToResponse($request, $next($request));
        }

        throw new TokenMismatchException;
    }

    //TODO: Configure these routes
    //http://www.camroncade.com/disable-csrf-for-specific-routes-laravel-5/
    protected function excludedRoutes($request)
    {
        $routes = [
            'api/attempt'
        ];

        foreach ($routes as $route) {
            if ($request->is($route)) {
                return true;
            }
        }

        return false;
    }
}
