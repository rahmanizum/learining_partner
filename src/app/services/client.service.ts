import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient){} 
    getAllClients():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_CLIENT);
   }
    getAllEmployee():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_EMP);
    }
   addUpdateClient(clientObj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+Constant.API_METHOD.ADD_UPDATE_CLIENT,clientObj);
   }

   deleteClient(clientId:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+Constant.API_METHOD.DELETE_CLIENT+'?clientId='+clientId);
   }
   getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}
