import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Slide } from 'src/app/models/slide';
import { sliderData } from 'src/assets/api/api-slider';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy{
//var slider
slider:Slide[]=sliderData
//variable currentslider img
//si le previous est de 1 sont suivant est 2
//next de 2 va donner 3
//ect
currentSlide:Slide =this.slider[0]
currentIndex: number=0;
//position du slide au sein du tableau
//observable
indexOb:Observable<number>= interval(4000)
//créer observable pour ensuite être abonné et aussi exécuter l'evenement à observé comme par exemple changer des images //slider tous les 25 seocndes
indexObsSub:Subscription | undefined
constructor() { }

  ngOnInit(): void {
    this.indexObsSub =this.indexOb.subscribe(
      //traiter les données
      {
        next:(value:number)=>{
         // console.log(value);
         this.handleChangeImage(1)

        }
      }
    )
  }
  ngOnDestroy(): void {
      this.indexObsSub?.unsubscribe
  }
  handleChangeImage(index:number){
    //console.log("index :", index);



    //slider des images sur le header
    //const currentIndex
    let newIndex

    if(index===-1){
      //console.log("previous :", index);
      //previous et le cas contraire est 1
      //on regarde d'abord l'indice de l'element
      newIndex = this.currentIndex -1
      if(newIndex>=0){
        //favorable
        this.currentIndex = newIndex
      }else{
        //corriger la difficulté
        //error
        //on prend la taille du  tableau - 1

        this.currentIndex =this.slider.length -1
      }
    }
    else{
      // Next
      //console.log("Next :", index);
      //cas 1 next image slider
      newIndex = this.currentIndex +1
      //
      if(newIndex>this.slider.length -1){
        //si sup à la taille du tableau donc en situation error,
        //on prend else
        this.currentIndex = 0

      }else{
        //ok
        this.currentIndex =newIndex
      }
    }
    //console.log("CurrentIndex : ", this.currentIndex);

  }

}
