<?php

namespace TheThunderTurner\FilamentXterm;

use Filament\Widgets\Widget;

class FilamentXterm extends Widget
{
    public static string $view = 'filament-xterm::terminal-widget';

    public function getColumnSpan(): int
    {
        return 2;
    }

    public function hasTitle(): bool
    {
        return true;
    }
}
