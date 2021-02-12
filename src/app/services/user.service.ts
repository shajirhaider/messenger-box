import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User [] = [
    {id : 1, name : "Nazmul 1", "email": "nazmul1@gmail.com", phone:"111111111", notes : "notes1", message : []},
    {id : 2, name : "Nazmul 2", "email": "nazmul2@gmail.com", phone:"999999999", notes : "notes2", message : []},
  ]
  constructor() { }

}
