import { Component } from '@angular/core';
import { User } from '../user.model'
import { UserService } from '../user.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  user: User = {
    name: '',
    email: '',
    address: ''
  }

  constructor(
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != undefined) {
      this.userService.findById(+id).subscribe(user => {
        this.user = user;
      });
    }
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('Operação executada com sucesso!');
      this.router.navigate(['/users'])
    });
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
