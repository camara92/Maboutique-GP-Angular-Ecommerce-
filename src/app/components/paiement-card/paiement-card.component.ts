import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-card',
  templateUrl: './paiement-card.component.html',
  styleUrls: ['./paiement-card.component.css']
})
export class PaiementCardComponent implements OnInit {
  //varible
 @Input() fullWidth:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
