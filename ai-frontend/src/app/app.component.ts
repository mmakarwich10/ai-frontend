import { Component } from '@angular/core';
import { ChatMessage } from './models/ChatMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chatMsgs: ChatMessage[] = [];

  constructor () {
    let dmIconLoc = "../assets/icons/Joker - Unshaded (50x50).png";
    let playerIconLoc = "../assets/icons/Zonai Light Spiral.png";
    let dmMessage: ChatMessage = new ChatMessage("DM", "Hello, how are you?", dmIconLoc);
    let playerMessage: ChatMessage = new ChatMessage("Player", "I'm good, thanks. And you?", playerIconLoc);
    let spamMessage: ChatMessage = new ChatMessage("Spam", "a", "../favicon.ico");

    this.chatMsgs = [ dmMessage, playerMessage ]

    var newMessage = "I'm doing okay, thanks. Let's start: \n\n" + 
      "You awaken to find you are slumped against a large tree that is among many in a forest. " + 
      "It is mid-afternoon, you feel the filtered sunlight warm your face and exposed arms, as well as see it dapple the ground in front of you. \n\n" +
      "What do you do?";

    this.chatMsgs.push(new ChatMessage("DM", newMessage, dmIconLoc));

    for (let i = 0; i < 10; i++) {
      this.chatMsgs.push(spamMessage);
    }
  }
}
