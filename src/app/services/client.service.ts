import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient){} 
    getAllClients():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+'GetAllClients');
   }
    getAllEmployee():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+'GetAllEmployee');
    }
   addUpdateClient(clientObj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+'AddUpdateClient',clientObj);
   }

   deleteClient(clientId:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+'DeleteClientByClientId?clientId='+clientId);
   }

}
