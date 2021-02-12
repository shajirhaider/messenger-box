import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Message } from '../../models/user'

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messageText: string = ""
  dateText = ""

  @Input() messages: Message[] = [];
  @Input() senderName: string;
  @Input() collapsed: boolean;
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let today = new Date()
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let monthArr = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this.dateText = day[today.getDay()] + ", " + monthArr[today.getMonth()] + " "+today.getDate() + ", "+ today.getFullYear() 
  }

  addMessage() {
    let message = { data: this.messageText, sender: this.senderName, date: this.formatedate() }
    this.messages.push(message)
    this.messageText = ""
  }

  formatedate() {
    let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = monthArr[today.getMonth()]

    let hours: number;
    let minutes = "0" + today.getMinutes();
    let ampm = ' AM'

    if (today.getHours() > 12) {
      hours = today.getHours() - 12
      ampm = ' PM'
    }
    let formattedTime = hours + ':' + minutes.substr(-2)
    console.log(mm + ' ' + dd + ',' + formattedTime)
    return mm + ' ' + dd + ', ' + formattedTime + ampm;

  }

}
