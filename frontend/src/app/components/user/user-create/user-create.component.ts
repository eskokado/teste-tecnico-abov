import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
import { User } from '../user.model'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    address: ''
  }

  constructor(
    private userService: UserService, 
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Operação executada com sucesso!');
      this.router.navigate(['/users'])
    });
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
