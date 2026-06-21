import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PalavrasDeDeusComponent } from './pages/palavras-de-deus/palavras-de-deus.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { LeituraComponent } from './pages/leitura/leitura.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { OndeNosEncontrarComponent } from './pages/on-de-nos-encontrar/on-de-nos-encontrar.component';
import { PedidoDeOracaoComponent } from './pages/pedido-de-oracao/pedido-de-oracao.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PalavrasDeDeusComponent,
    NoticiasComponent,
    LeituraComponent,
    FaleConoscoComponent,
    OndeNosEncontrarComponent,
    PedidoDeOracaoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
