import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Popover } from 'primeng/popover';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule, Popover, Drawer],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    isMenuOpen = signal(false);
    sidebarVisible: boolean = false;

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
