import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientProject } from '../../model/class/client-project';
import { ClientProjectService } from '../../services/client-project.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectObj: ClientProject = new ClientProject();
  projectList: ClientProject[] = [];
  clientProjectService = inject(ClientProjectService);

  ngOnInit(): void {
    this.loadAllProjects();
  }
  loadAllProjects() {
    this.clientProjectService
      .getAllClientProjects()
      .subscribe((res: APIResponseModel) => {
        this.projectList = res.data;
      });
  }
  onSaveProject() {}
  onResetForm() {}
  onDeleteProject(projectId: number) {}
  onEditProject(project: ClientProject) {}
}
