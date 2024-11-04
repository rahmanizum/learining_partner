import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, AsyncPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
  userList$ : Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadAllClients();
    this.userList$ = this.clientService.getAllUser();
  }

  loadAllClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }
  onSaveClient() {
    this.clientService
      .addUpdateClient(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert(res.message);
          this.clientObj = new Client();
        }
        this.loadAllClients();
      });
  }

  onDeleteClient(clientId: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.clientService
        .deleteClient(clientId)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert(res.message);
          }
          this.loadAllClients();
        });
    }
  }

  onEditClient(clientObj: Client) {
    this.clientObj = clientObj;
  }

  onResetForm() {
    this.clientObj = new Client();
  }
}
