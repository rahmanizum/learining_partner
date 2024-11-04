import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any = {
    email: '',
    password: ''
  }
  router = inject(Router)

  login() {
    if(this.loginObj.email == 'admin' && this.loginObj.password == 'admin') {
      this.router.navigate(['master'])
      localStorage.setItem('user', this.loginObj.email)
    }else{
      alert('Invalid credentials')
    }
  }
}
