import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import {User} from '../../models/user'

@Component({
  selector: 'app-messenger-window',
  templateUrl: './messenger-window.component.html',
  styleUrls: ['./messenger-window.component.css']
})
export class MessengerWindowComponent implements OnInit {
  collapsed = false
  userList = []
  currentUser: User = new User();
  tagListShow = false
  tagList = ['Complain', 'Query', 'Request', 'Resolve']
  selectedTagList = ['Complain']
  editNotes = false

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.userList
    this.currentUser = this.userList[0]
  }

  addTag(i) {
    this.selectedTagList.push(i)
  }

  removeTag(i) {
    this.selectedTagList.splice(i,1)
  }
  getCurrentUser(i) {
    this.currentUser = this.userList[i]
  }
}
