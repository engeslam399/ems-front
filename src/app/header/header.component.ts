import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Popover } from 'primeng/popover';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule, Popover],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    isMenuOpen = signal(false);

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
