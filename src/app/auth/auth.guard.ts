import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // If we already have a user, allow
    if (authService.isLoggedIn()) {
        return true;
    }

    // Otherwise check with backend
    return authService.checkAuth().pipe(
        map(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            } else {
                return router.parseUrl('/login');
            }
        })
    );
};
