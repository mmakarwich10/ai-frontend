export class ChatMessage {
    username: string = "UnknownUser";
    userIconLocation: string = "../favicon.ico"
    message: string = "Message not found.";

    constructor (name: string, msg: string, loc: string) {
        this.username = name;
        this.message = msg;
        this.userIconLocation = loc;
    }
}