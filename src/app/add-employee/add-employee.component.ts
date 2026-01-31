import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';
import { Button } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-add-employee',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        Card,
        InputText,
        Select,
        DatePicker,
        Button,
        InputNumber,
        Toast
    ],
    providers: [MessageService],
    templateUrl: './add-employee.component.html',
    styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
    employeeForm: FormGroup;
    departments = [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Human Resources', value: 'HR' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'Finance', value: 'Finance' },
        { label: 'Operations', value: 'Operations' }
    ];

    roles = [
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Project Manager', value: 'Project Manager' },
        { label: 'HR Manager', value: 'HR Manager' },
        { label: 'DevOps Engineer', value: 'DevOps Engineer' }
    ];

    constructor(private fb: FormBuilder, private messageService: MessageService) {
        this.employeeForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            department: [null, Validators.required],
            role: [null, Validators.required],
            joinDate: [null, Validators.required],
            salary: [null, [Validators.required, Validators.min(0)]]
        });
    }

    onSubmit() {
        if (this.employeeForm.valid) {
            console.log('Employee Data:', this.employeeForm.value);
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Employee registered successfully'
            });
            this.employeeForm.reset();
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please fill all required fields'
            });
        }
    }
}
