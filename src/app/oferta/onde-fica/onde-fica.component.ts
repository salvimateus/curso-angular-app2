import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

    public ondeFica: string = ''

    constructor(
        private route: ActivatedRoute,
        private ofertasService: OfertasService
    ) { }

    ngOnInit(): void {
        this.ofertasService.getOndeFicaOfertaPorId( this.route.parent.snapshot.params['id'] )
            .then(
                ( resposta: string ) => {
                    this.ondeFica = resposta
                }
            )
    }

}
