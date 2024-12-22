# Filament Xterm

[![Latest Version on Packagist](https://img.shields.io/packagist/v/thethunderturner/filament-xterm.svg?style=flat-square)](https://packagist.org/packages/thethunderturner/filament-xterm)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/thethunderturner/filament-xterm/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/thethunderturner/filament-xterm/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/thethunderturner/filament-xterm/fix-php-code-styling.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/thethunderturner/filament-xterm/actions?query=workflow%3A"Fix+PHP+code+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/thethunderturner/filament-xterm.svg?style=flat-square)](https://packagist.org/packages/thethunderturner/filament-xterm)



A filament plugin that gives you access to a terminal in your browser. It uses the [xterm.js](https://xtermjs.org/) library to create a terminal emulator in your browser.

> [!CAUTION]
> Please make sure the widget has proper permissions and is secure. This widget can be used to run commands on your server. Make sure you have proper security measures in place. Otherwise you might be at risk of being hacked and/or having your data compromised.

## Installation

You can install the package via composer:

```bash
composer require thethunderturner/filament-xterm
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-xterm-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-xterm-views"
```

## Usage

Simply add the widget to your page using the following code:
```php
protected function getHeaderWidgets(): array
{
    return [
        \TheThunderTurner\FilamentXterm\FilamentXtermWidget::class,
    ];
}
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Matthaios Biskas](https://github.com/thethunderturner)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
