import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [ UserService ]
})
export class UserDetailsComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.userId=urlParameters['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
  }

}
