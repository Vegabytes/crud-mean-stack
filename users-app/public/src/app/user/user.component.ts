import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: User[];
 /*= [
  new User(1,'Alex','Castillo',"ejemplo@ejemplo.com"),
  new User(2,'Alexia','Castillo',"ejemplo@ejemplo.com"),
  new User(3,'Vega','Castillo',"ejemplo@ejemplo.com"),
  new User(4,'Sheilla','Castillo',"ejemplo@ejemplo.com")
];*/
  constructor
  (private _userService: UserService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users);
  }

  create(user:User) {
    //this.users.push(user);
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(error => console.log(error));
  }

  destroy(user:User) {
    /*const i = this.users.indexOf(user);
    this.users.splice(i,1)*/
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(error => console.log(error));
  }

  update(user:User) {       
    /*const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;*/
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(error => console.log(error));
  }

}
