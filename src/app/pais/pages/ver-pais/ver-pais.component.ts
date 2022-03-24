import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais)

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha(id)
    //     .subscribe(pais=>{
    //       console.log(pais);
          
    //     })

    //   });
  }

}