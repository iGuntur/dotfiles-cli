import test from 'ava';
import App from './dist';
const app = new App();

test('should all commands must be array and not empty arrays', t => {
    const cmd = app.availableCommands();
    t.truthy(cmd);
    t.true(cmd.length > 0);
    t.true(Array.isArray(cmd));
});

test('each "availableCommands" should be to execute', t => {
    const cmd = app.availableCommands();
    cmd.forEach(x => {
        t.true(app.commandExist(x));
    });
});

test('type of <install> ready to process', t => {
    const isExist = app.commandExist('install');
    t.true(isExist);
});

test('should be terminate the process if the command is not exist', t => {
    const notExist = app.commandExist('foo');
    t.false(notExist);
});
