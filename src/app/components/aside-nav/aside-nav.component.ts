import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { auth_items, nav_items } from 'src/assets/api/nav.';



@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {
  navs_data: Item[]= nav_items
  auths_data: Item[]= auth_items
//envoie de message au parent pour faire fermer la bare burger lors de chargement de la page
@Output() close:EventEmitter<string> =new EventEmitter<string>()
//ce close on le met au click d'un element du aside-nav



  constructor() { }

  ngOnInit(): void {
  }

  handleClose(){
    //cet evenement sera ecouté au niveau du aside nav component qui se troiuve au niveau du header
    this.close.emit()
    console.log(this.close)
  }

}
