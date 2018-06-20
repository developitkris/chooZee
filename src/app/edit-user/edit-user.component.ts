import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  beginUpdatingUser(userToUpdate){
    if(confirm("Are you sure you want to delete this item from the inventory?")){}
  }
}
