<?php

namespace TheThunderTurner\FilamentXterm;

use Filament\Widgets\Widget;
use Illuminate\Support\Facades\Process;

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

    public function executeCommand(string $command): array
    {
        $result = Process::run($command);

        return [
            'output' => $result->output(),
            'error' => $result->errorOutput(),
            'exitCode' => $result->exitCode(),
        ];
    }
}
