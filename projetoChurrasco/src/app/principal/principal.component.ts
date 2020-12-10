import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    listaCompleta: any[] = [];

    dados = {
        nomeParticipante: "",
        bebida:  false,
        possuiConvidado: false,
        valor: 0,
        convidado: {
            nome: "",
            bebida: false
        }
    };

    totalValorComida = 0;
    totalValorBebida = 0;
    totalValorArrecadado = 0;
    
    constructor() { }   

    ngOnInit(): void {

    }

    cadastrar() {

        let valorParticipante = 10;

        const { bebida, possuiConvidado, convidado } = this.dados;

        this.totalValorComida += 10;

        if(bebida){
            valorParticipante += 10;
            this.totalValorBebida += 10;
        }

        if(possuiConvidado){
            valorParticipante += 10;
            this.totalValorComida += 10;
        }

        if(possuiConvidado && convidado.bebida){
            this.totalValorBebida += 10;
            valorParticipante += 10;
        }

        this.totalValorArrecadado += valorParticipante;
        this.dados.valor = valorParticipante;

        this.listaCompleta.push(this.dados);
        this.limpaFormulario();
    }

    limpaFormulario() {
        this.dados = {
            nomeParticipante: "",
            bebida:  false,
            valor: 0,
            possuiConvidado: false,
            convidado: {
                nome: "",
                bebida: false
            }
        };
    }

    cancelarParticipacao(participante: any) {

        let { bebida, possuiConvidado, convidado, valor } = this.listaCompleta[participante];

        this.totalValorComida -= 10;

        if(bebida) this.totalValorBebida -= 10;

        if(possuiConvidado) this.totalValorComida -= 10;

        if(possuiConvidado && convidado.bebida) this.totalValorBebida -= 10;

        this.totalValorArrecadado -= valor;

        this.listaCompleta.splice(participante, 1);
        
    }

    cancelarConvidado(participante: any) {

        const { bebida } = this.listaCompleta[participante].convidado;

        this.totalValorComida -= 10;
        this.totalValorArrecadado -= 10;
        this.listaCompleta[participante].valor -= 10;

        if(bebida) {
            this.totalValorBebida -= 10;
            this.totalValorArrecadado -= 10;
            this.listaCompleta[participante].valor -= 10;
        }

        let convidado = {
            nome: "",
            bebida: false
        }

        this.listaCompleta[participante].possuiConvidado = false;
        this.listaCompleta[participante].convidado = convidado   ;    
        
    }

 
}


