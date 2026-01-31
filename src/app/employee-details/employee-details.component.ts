import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-employee-details',
    standalone: true,
    imports: [CommonModule, CardModule, TagModule, DividerModule, ButtonModule, AvatarModule],
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
    user = {
        name: 'John Doe',
        role: 'Senior Software Engineer',
        email: 'john.doe@ems.com',
        phone: '+20 123 456 7890',
        department: 'Engineering',
        location: 'Cairo, Egypt',
        joinDate: 'January 15, 2022',
        status: 'Active',
        bio: 'Passionate software engineer with 5+ years of experience in building modern web applications using Angular and Node.js.',
        skills: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Bootstrap', 'REST Identity'],
        stats: [
            { label: 'Projects', value: '12' },
            { label: 'Attendance', value: '98%' },
            { label: 'Performance', value: '4.9/5' }
        ]
    };

    getSeverity(status: string) {
        switch (status) {
            case 'Active': return 'success';
            case 'On Leave': return 'warn';
            case 'Terminated': return 'danger';
            default: return 'info';
        }
    }
}
