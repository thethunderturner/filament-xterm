<?php

namespace TheThunderTurner\FilamentXterm\Commands;

use Illuminate\Console\Command;

class FilamentXtermCommand extends Command
{
    public $signature = 'filament-xterm';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
