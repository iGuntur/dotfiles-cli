class CommandException {
    constructor(messages, name) {
        this.name = name;
        this.messages = messages;
    }
}

export default CommandException;
