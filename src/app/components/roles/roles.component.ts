import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName : string = "Vivek";
  angularVersion = "18.2.0";
  version : number = 18.2;
  isActive : boolean = true;
  currentDate : Date = new Date();
  inputType : string = "checkbox";
}
