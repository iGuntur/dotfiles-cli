import fs from 'fs';
import p from 'path';
import { includes } from 'lodash';
import requireDir from 'require-dir';
import pathExist from 'path-exists';
import CommandException from './command-exception';

class CommandProcess {

    constructor(input, flags) {
        this.input = input;
        this.flags = flags;
    }

    /**
     * Available commands
     *
     * @return {Array}
     */
    availableCommands() {
        let cmd = [];
        let recipes = requireDir('./recipes');

        Object.keys(recipes).forEach(
            name => cmd.push(name)
        );

        return cmd;
    }

    /**
     * Process command
     *
     * @param  {String} command
     * @param  {String} flags
     * @return {Mixins}
     */
    process(command, flags) {
        return console.log(`Process ${command} with ${flags} ... \nFinish!!!`);
    }

    /**
     * Check if the command exist
     *
     * @param  {String}  cmd
     * @return {Boolean}
     */
    commandExist(command) {
        return includes(this.availableCommands(), command);
    }

    /**
     * Execute command
     *
     * @return {Mixins}
     */
    exec() {
        let command = this.input;
        let flags = this.flags;

        if (this.commandExist(command)) {
            return this.process(command, flags);
        } else {
            throw new CommandException(
                '\nPlease run "dotfiles --help" to see available commands',
                `CommandException: <${command}>`
            );
        }
    }
}

export default CommandProcess;
