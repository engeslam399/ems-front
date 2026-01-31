import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
    selector: 'app-employees',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        TableModule,
        ButtonModule,
        InputTextModule,
        TagModule,
        AvatarModule,
        IconFieldModule,
        InputIconModule
    ],
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css'
})
export class EmployeesComponent {
    employees = [
        { id: 1, name: 'John Doe', email: 'john.doe@ems.com', role: 'Senior Developer', department: 'Engineering', status: 'Active', salary: 75000 },
        { id: 2, name: 'Sarah Kim', email: 'sarah.k@ems.com', role: 'UX Designer', department: 'Marketing', status: 'Active', salary: 68000 },
        { id: 3, name: 'Mike Ross', email: 'm.ross@ems.com', role: 'Project Manager', department: 'Operations', status: 'On Leave', salary: 82000 },
        { id: 4, name: 'Emma Watson', email: 'emma.w@ems.com', role: 'HR Manager', department: 'HR', status: 'Active', salary: 72000 },
        { id: 5, name: 'David Chen', email: 'd.chen@ems.com', role: 'DevOps Engineer', department: 'Engineering', status: 'Terminated', salary: 78000 }
    ];

    getSeverity(status: string) {
        switch (status) {
            case 'Active': return 'success';
            case 'On Leave': return 'warn';
            case 'Terminated': return 'danger';
            default: return 'info';
        }
    }
}
