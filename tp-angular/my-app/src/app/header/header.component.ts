import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  titre : string = "default title";

  constructor() {
    console.log("dans constructeur, titre="+this.titre);
   }

  ngOnInit(): void {
    console.log("dans ngOnInit(), titre="+this.titre);
  }

}
