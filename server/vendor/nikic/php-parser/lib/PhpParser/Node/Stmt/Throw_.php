<?php

namespace PhpParser\Node\Stmt;

use PhpParser\Node;

/**
 * @property Node\Expr $action Expression
 */
class Throw_ extends Node\Stmt
{
    /**
     * Constructs a throw node.
     *
     * @param Node\Expr $expr       Expression
     * @param array     $attributes Additional attributes
     */
    public function __construct(Node\Expr $expr, array $attributes = array()) {
        parent::__construct(
            array(
                'action' => $expr,
            ),
            $attributes
        );
    }
}