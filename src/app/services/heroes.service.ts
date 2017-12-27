import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http'
import { Heroe } from '../interface/heroe.interface'
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-29bd9.firebaseio.com/heroes.json"


  constructor( private http:Http) { }

  nuevoHeroe( heroe:Heroe){

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-type':'application/json'
    });

    return this.http.post(this.heroesURL,  body , {headers})
    .map( res =>{
          console.log(res.json());
          return res.json();
    })

  }


}
