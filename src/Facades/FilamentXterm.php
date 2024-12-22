<?php

namespace TheThunderTurner\FilamentXterm\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \TheThunderTurner\FilamentXterm\FilamentXterm
 */
class FilamentXterm extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \TheThunderTurner\FilamentXterm\FilamentXtermWidget::class;
    }
}
