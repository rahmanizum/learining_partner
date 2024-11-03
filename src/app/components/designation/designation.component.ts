import { Component , inject , OnInit} from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);
  isLoading = true;
  ngOnInit(): void {
    this.masterService.getDesignationList().subscribe((res:APIResponseModel) => {
      this.designationList = res.data;
      this.isLoading = false
    }, (err) => {
      alert(err)
      this.isLoading = false
    });
  }

  
}
