import test from 'ava';
import CommandProcess from '../dist/commands/command-process';
const cmd = new CommandProcess();

test('should all commands must be array and not empty arrays', t => {
    const all = cmd.availableCommands();
    t.truthy(all);
    t.true(all.length > 0);
    t.true(Array.isArray(all));
});

test('each "availableCommands" should be to execute', t => {
    const all = cmd.availableCommands();
    all.forEach(x => {
        t.true(cmd.commandExist(x));
    });
});

test('type of <install> ready to process', t => {
    const isExist = cmd.commandExist('install');
    t.true(isExist);
});

test('should be terminate the process if the command is not exist', t => {
    const notExist = cmd.commandExist('foo');
    t.false(notExist);
});
