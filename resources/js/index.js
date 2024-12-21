import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

export default function xtermTerminal() {
    return {
        term: null,
        init() {
            this.term = new Terminal({
                fontSize: 13,
                fontFamily: '"Menlo for Powerline", Menlo, Consolas, "Liberation Mono", Courier, monospace',
                theme: {
                    foreground: '#d2d2d2',
                    background: '#2b2b2b',
                    cursor: '#adadad',
                    black: '#000000',
                    red: '#d81e00',
                    green: '#5ea702',
                    yellow: '#cfae00',
                    blue: '#427ab3',
                    magenta: '#89658e',
                    cyan: '#00a7aa',
                    white: '#dbded8',
                    brightBlack: '#686a66',
                    brightRed: '#f54235',
                    brightGreen: '#99e343',
                    brightYellow: '#fdeb61',
                    brightBlue: '#84b0d8',
                    brightMagenta: '#bc94b7',
                    brightCyan: '#37e6e8',
                    brightWhite: '#f1f1f0'
                }
            });

            const terminalElement = document.getElementById('xterm-terminal');
            if (terminalElement) {
                this.term.open(terminalElement);
                this.term.write('Hello from xterm.js\r\n$ ');

                // Enable local echo
                this.term.onKey(({ key, domEvent }) => {
                    // Handle enter key
                    if (domEvent.keyCode === 13) {
                        this.term.write('\r\n$ ');
                    }
                    // Handle backspace
                    else if (domEvent.keyCode === 8) {
                        // Move cursor backward and clear the character
                        if (this.term._core.buffer.x > 2) {
                            this.term.write('\b \b');
                        }
                    }
                    // Regular character input
                    else {
                        this.term.write(key);
                    }
                });

                // Focus the terminal
                this.term.focus();
            } else {
                console.error('Terminal element not found.');
            }
        },
        destroy() {
            if (this.term) {
                this.term.dispose();
            }
        }
    };
}
