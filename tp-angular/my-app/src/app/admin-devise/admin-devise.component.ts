import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  codeDevise : string ;
  message : string = "";
  
  onSupprimer(){
    this.deviseService.deleteDeviseServerSide(this.codeDevise)
    .subscribe(
      ()=>{this.message="ok"; } ,
      (error) => { console.log(error);
                   this.message = JSON.stringify(error); }
  );
  }

  constructor(private deviseService : DeviseService) { }

  ngOnInit(): void {
  }

}
