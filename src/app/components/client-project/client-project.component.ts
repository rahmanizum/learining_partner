import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientProject } from '../../model/interface/role';
import { ClientProjectService } from '../../services/client-project.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/client';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0), 
    projectName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0), 
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''), 
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(0),
  })
  clientService = inject(ClientService);
  clientProjectService = inject(ClientProjectService);

  employeeList: Employee[] = [];
  clientList: Client[] = [];
  projectList = signal<ClientProject[]>([]);

  heading = signal('Client Project List');
  
  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClient();
    this.loadAllProjects();

  }
  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel) => {
      this.employeeList = res.data
    })
  }

  getAllClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data
    })
  }
  loadAllProjects() {
    this.clientProjectService
      .getAllClientProjects()
      .subscribe((res: APIResponseModel) => {
        this.projectList.set(res.data);
      });
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    this.clientProjectService.addUpdateClientProject(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert(res.message);
      }else{
        alert(res.message);
      }
      this.loadAllProjects();
      this.onResetForm();
    })
  }
  onResetForm() {
    this.projectForm.reset();
  }
  onDeleteProject(projectId: number) {}
  onEditProject(project: ClientProject) {}
  changeHeading() {
    this.heading.set('Client Project new List');
  }

}
