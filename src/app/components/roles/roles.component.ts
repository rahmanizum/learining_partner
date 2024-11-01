import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
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
  selectedState : string = "";
}
