import { Component, OnInit } from '@angular/core';
import { User } from '../user.model'
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: User[] = []
  displayedColumns = ['id', 'name', 'email', 'address', 'actions'];


  constructor(
    private userService: UserService
  ) {}


  ngOnInit(): void {
      this.userService.list().subscribe(users => {
        this.users = users;
      })
  }
}
