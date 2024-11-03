import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ClientProject } from '../model/class/client-project';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(private http: HttpClient) { }
  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllClientProjects'); 
  }

  addUpdateClientProject(clientProjectObj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL+'AddUpdateClientProject', clientProjectObj);
  }
}
