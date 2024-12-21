<x-filament-widgets::widget>
    <x-filament::section>
        <x-slot name="heading">
            {{ __('filament-xterm::xterm.title') }}
        </x-slot>

        <div
            x-ignore
            ax-load
            ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-xterm', 'thethunderturner/filament-xterm') }}"
            x-load-css="[@js(\Filament\Support\Facades\FilamentAsset::getStyleHref('filament-xterm', package: 'thethunderturner/filament-xterm'))]"
            x-data="xtermTerminal()"
            style="height: 20rem;"
            wire:ignore
        >
            <div id="xterm-terminal">
            </div>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
