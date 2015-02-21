<?php

namespace PhpParser\Node\Expr;

use PhpParser\Node\Expr;

/**
 * @property null|Expr $action Expression
 */
class Exit_ extends Expr
{
    /**
     * Constructs an exit() node.
     *
     * @param null|Expr $expr       Expression
     * @param array                    $attributes Additional attributes
     */
    public function __construct(Expr $expr = null, array $attributes = array()) {
        parent::__construct(
            array(
                'action' => $expr
            ),
            $attributes
        );
    }
}