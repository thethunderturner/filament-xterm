# This is a filament package the gives users the ability to access the terminal on the web

[![Latest Version on Packagist](https://img.shields.io/packagist/v/thethunderturner/filament-xterm.svg?style=flat-square)](https://packagist.org/packages/thethunderturner/filament-xterm)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/thethunderturner/filament-xterm/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/thethunderturner/filament-xterm/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/thethunderturner/filament-xterm/fix-php-code-styling.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/thethunderturner/filament-xterm/actions?query=workflow%3A"Fix+PHP+code+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/thethunderturner/filament-xterm.svg?style=flat-square)](https://packagist.org/packages/thethunderturner/filament-xterm)



This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via composer:

```bash
composer require thethunderturner/filament-xterm
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="filament-xterm-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-xterm-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-xterm-views"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$filamentXterm = new TheThunderTurner\FilamentXterm();
echo $filamentXterm->echoPhrase('Hello, TheThunderTurner!');
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
