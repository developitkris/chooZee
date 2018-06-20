import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2/database';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToDetailPage(clickedUser){
    this.router.navigate(['user', clickedUser.$key])
  };
}
