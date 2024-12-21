import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

export default function xtermTerminal() {
    return {
        term: null,
        init() {
            this.term = new Terminal();
            const terminalElement = document.getElementById('xterm-terminal');
            if (terminalElement) {
                this.term.open(terminalElement);
                this.term.write('Hello from xterm.js\r\n');
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
