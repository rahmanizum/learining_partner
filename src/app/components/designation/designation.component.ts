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
  ngOnInit(): void {
    this.masterService.getDesignationList().subscribe((res:APIResponseModel) => {
      this.designationList = res.data;
    }, (err) => {
      alert(err)
    });
  }

  masterService = inject(MasterService);
}
