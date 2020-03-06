import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

    // private tempoObservableSubs: Subscription
    // private meuObservableTesteSubs: Subscription

    public oferta: Oferta

    constructor(
        private route: ActivatedRoute,
        private ofertasService: OfertasService
    ) { }

    ngOnInit(): void {

        this.ofertasService.getOfertaPorId( this.route.snapshot.params['id'] )
            .then(
                ( oferta: Oferta ) => {
                    this.oferta = oferta
                    // console.log( oferta )
                }
            )

        // this.route.params.subscribe(
        //     ( parametro: any ) => console.log( parametro ),
        //     ( erro: any ) => console.log( erro ),
        //     () => console.log( 'concluido' )
        // )

        // let tempo = interval( 500 )

        // this.tempoObservableSubs = tempo.subscribe( ( intervalo: number ) => console.log( intervalo ) )

        // // observável
        // let meuObservableTeste = Observable.create( ( observer: Observer<string> ) => {
        //     observer.next( 'primeira stream' )
        // } )

        // // observador
        // this.meuObservableTesteSubs = meuObservableTeste.subscribe(
        //     ( resposta: any ) => console.log( resposta )
        // )
    }

    ngOnDestroy(): void {
        // this.tempoObservableSubs.unsubscribe()
        // this.meuObservableTesteSubs.unsubscribe()
    }

}
