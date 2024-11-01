import { HttpClient } from '@angular/common/http';
import { Component,OnInit,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent  implements OnInit {
  roleList: IRole[] = [];

  http = inject(HttpClient);
  ngOnInit(): void {
    this.getALlRoles()

  }

  getALlRoles() {
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res : APIResponseModel) => {
      this.roleList = res.data;
    })
  }
}
