import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  submitForm(firstName: string, lastName: string, userName: string, email: string){
    var newUser: User = new User(firstName, lastName, userName, email);
    this.userService.addUser(newUser);
  }

}
