import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

export default function xtermTerminal() {
    return {
        term: null,
        currentCommand: '',

        init() {
            this.term = new Terminal({
                fontSize: 13,
                fontFamily: '"Menlo for Powerline", Menlo, Consolas, "Liberation Mono", Courier, monospace',
                convertEol: true, // Enable proper line endings
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

            const terminalElement = this.$el;
            if (terminalElement) {
                this.term.open(terminalElement);
                this.term.write('$ ');

                this.term.onKey(({ key, domEvent }) => {
                    if (domEvent.keyCode === 13) { // Enter
                        if (this.currentCommand.trim()) {
                            this.$wire.executeCommand(this.currentCommand)
                                .then(result => {
                                    if (result.output) {
                                        this.term.write(`\r\n${result.output}`);
                                    }
                                    if (result.error) {
                                        this.term.write(`\r\n${result.error}`);
                                    }
                                    this.term.write('\r\n$ ');
                                });
                        } else {
                            this.term.write('\r\n$ ');
                        }
                        this.currentCommand = '';
                    }
                    else if (domEvent.keyCode === 8) { // Backspace
                        if (this.currentCommand.length > 0) {
                            this.currentCommand = this.currentCommand.slice(0, -1);
                            this.term.write('\b \b');
                        }
                    }
                    else { // Regular input
                        this.currentCommand += key;
                        this.term.write(key);
                    }
                });

                this.term.focus();
            }
        },
        destroy() {
            if (this.term) {
                this.term.dispose();
            }
        }
    };
}
