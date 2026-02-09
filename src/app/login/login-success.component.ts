import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login-success',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="flex align-items-center justify-content-center h-screen">
    <p>Logging you in...</p>
  </div>`
})
export class LoginSuccessComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
        // Give a brief moment for the cookie to be set/auth check to happen
        setTimeout(() => {
            this.authService.checkAuth().subscribe(() => {
                this.router.navigate(['/home']);
            });
        }, 1000);
    }
}
