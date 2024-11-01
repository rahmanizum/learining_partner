import { HttpClient } from '@angular/common/http';
import { Component,OnInit,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
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
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res : any) => {
      this.roleList = res.data;
    })
  }
}
