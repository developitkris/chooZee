import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users'); }
  getUsers(){
    return this.users;
  }
  addUser(newUser: User){
    this.users.push(newUser);
  }
  getUserById(userId: string){
    return this.database.object('users/'+userId);
  }
  updateUser(localUpdatedUser){
    var userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({firstName: localUpdatedUser.firstName,lastName: localUpdatedUser.lastName, userName: localUpdatedUser.userName})
  }
  deleteUser(localUserToDelete){
    var userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }
  }
