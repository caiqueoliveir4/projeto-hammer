import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    dados = {
        nomeParticipante: "",
        churrasco: false,
        bebida:  false,
        possuiConvidado: false,
        convidado: {
            nome: "",
            churrasco: false,
            bebida: false
        }
    };

    constructor() { }


    ngOnInit(): void {
    }

    cadastrar(): void {
        console.log("Dados", this.dados);
    }

}
