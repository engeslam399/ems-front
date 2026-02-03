import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedSignal = signal<boolean>(this.checkToken());

    constructor() { }

    private checkToken(): boolean {
        // In a real app, you might also validate the token with the server
        return !!localStorage.getItem('auth_token');
    }

    isLoggedIn() {
        return this.isAuthenticatedSignal();
    }

    login(token: string) {
        localStorage.setItem('auth_token', token);
        this.isAuthenticatedSignal.set(true);
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.isAuthenticatedSignal.set(false);
    }
}
