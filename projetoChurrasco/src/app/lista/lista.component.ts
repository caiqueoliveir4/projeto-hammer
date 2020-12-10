import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    listaCompleta = [
        {
            nome: "Teiji",
            churrasco: "Sim",
            bebida: "Sim",
            possuiAcompanhante: "Sim",
            valor: 200
        },
        { 
            nome: "Caique", 
            churrasco: "Sim", 
            bebida: "Sim", 
            possuiAcompanhante: "Sim", 
            valor: 200 
        },
        { 
            nome: "Wesley", 
            churrasco: "Sim", 
            bebida: "Sim", 
            possuiAcompanhante: "Sim", 
            valor: 200 
        },
        { 
            nome: "Daia", 
            churrasco: "Sim", 
            bebida: "Sim", 
            possuiAcompanhante: "Sim", 
            valor: 200 
        }
    ];

    constructor() { }

    ngOnInit(): void {

    }

    cadastrar(): void {
        console.log("Dados", this.dados);
    }

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

}
