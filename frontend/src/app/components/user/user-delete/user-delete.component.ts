import { Component } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../user.model'

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent{

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

  deleteUser(): void {
    this.userService.deleteById(this.user.id).subscribe(() => {
      this.userService.showMessage('Operação executada com sucesso!');
      this.router.navigate(['/users'])
    });
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
