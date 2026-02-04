import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private isAuthenticatedSignal = signal<boolean>(false);
    currentUser = signal<any>(null);

    constructor() {
        this.checkAuth();
    }

    checkAuth() {
        // Attempt to fetch user from backend
        this.http.get('http://localhost:8080/api/auth/me', { withCredentials: true })
            .subscribe({
                next: (user) => {
                    this.currentUser.set(user);
                    this.isAuthenticatedSignal.set(true);
                },
                error: () => {
                    this.isAuthenticatedSignal.set(false);
                    this.currentUser.set(null);
                }
            });
    }

    isLoggedIn() {
        return this.isAuthenticatedSignal();
    }

    login(token: string) {
        // Legacy login (if needed) or trigger fetch
        this.checkAuth();
    }

    logout() {
        // Here you would also call backend logout endpoint
        this.isAuthenticatedSignal.set(false);
        this.currentUser.set(null);
        localStorage.removeItem('auth_token');
    }
}
