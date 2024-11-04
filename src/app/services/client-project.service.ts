import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ClientProject } from '../model/class/client-project';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {

  constructor(private http: HttpClient) { }
  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_CLIENT_PROJECT); 
  }

  addUpdateClientProject(clientProjectObj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL+Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, clientProjectObj);
  }
}
