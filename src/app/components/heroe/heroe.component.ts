import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service'



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre:"",
    bio:"",
    poder:"",
    casa:""
  }

  nuevo:boolean = false;
  id:string;
  constructor( private _heroesService:HeroesService , private router:Router , private routes:ActivatedRoute ) {

    this.routes.params.subscribe(parametros=>{
      this.id = parametros['id']
      if(this.id !== "nuevo"){

        this._heroesService.getHeroe(this.id).subscribe(heroe => this.heroe = heroe)

      }

  });




  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
          if(this.id == "nuevo"){
              //insertando
              this._heroesService.nuevoHeroe( this.heroe)
              .subscribe(data=>{
                  this.router.navigate(['/heroe',data.name])
              },error => console.error(error))
          }else{
            //actualizando
            this._heroesService.actualizarHeroe( this.heroe , this.id).subscribe(data=>{
                console.log(data)
            },error => console.error(error))
          }

  }

  agregarNuevo( forma:NgForm){

    this.router.navigate(['/heroe','nuevo']);

    forma.reset({
      casa:"Marvel"
    });

  }


}
