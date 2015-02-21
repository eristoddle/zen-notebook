<?php

namespace PhpParser\Node\Expr;

use PhpParser\Node\Name;
use PhpParser\Node\Expr;

/**
 * @property Expr $action  Expression
 * @property Name|Expr $class Class name
 */
class Instanceof_ extends Expr
{
    /**
     * Constructs an instanceof check node.
     *
     * @param Expr      $expr       Expression
     * @param Name|Expr $class      Class name
     * @param array     $attributes Additional attributes
     */
    public function __construct(Expr $expr, $class, array $attributes = array()) {
        parent::__construct(
            array(
                'action' => $expr,
                'class' => $class
            ),
            $attributes
        );
    }
}