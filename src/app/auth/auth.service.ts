import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, of, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    currentUser = signal<any>(null);

    constructor() { }

    checkAuth(): Observable<boolean> {
        return this.http.get('http://localhost:8080/api/auth/me', { withCredentials: true }).pipe(
            tap((user) => {
                this.currentUser.set(user);
            }),
            map(() => true),
            catchError(() => {
                this.currentUser.set(null);
                return of(false);
            })
        );
    }

    isLoggedIn() {
        return !!this.currentUser();
    }

    login(token: string) {
        // Legacy login (if needed) or trigger fetch
        this.checkAuth().subscribe();
    }

    logout() {
        this.http.post('http://localhost:8080/logout', {}, { withCredentials: true }).subscribe();
        this.currentUser.set(null);
        localStorage.removeItem('auth_token');
    }
}
