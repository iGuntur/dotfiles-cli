import CommandProcess from './commands/command-process';

class Dotfiles {

    /**
     * Instance dotfiles
     *
     * @param  {Object} cli
     * @return {Object}
     */
    constructor(cli) {
        this.command = cli ? cli.command : '';
        this.flags = cli ? cli.flags : '';
    }

    /**
     * Run process
     *
     * @return {Mixins}
     */
    run() {
        try {
            return new CommandProcess(this.command, this.flags).exec();
        } catch (e) {
            return this.terminate(e);
        }
    }

    /**
     * Terminate the process
     *
     * @param  {Object} e InvalidCommandException
     * @return {Mixins}
     */
    terminate(e) {
        console.error(e.name, e.messages);
        process.exit(1);
    }
}

export default Dotfiles;
