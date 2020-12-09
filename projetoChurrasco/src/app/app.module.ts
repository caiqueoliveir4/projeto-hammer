import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MainComponent } from './main/main.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { TotalizadorComponent } from './totalizador/totalizador.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    FormularioComponent,
    ListaComponent,
    TotalizadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
