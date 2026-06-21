import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PalavrasDeDeusComponent } from './pages/palavras-de-deus/palavras-de-deus.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { LeituraComponent } from './pages/leitura/leitura.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { OndeNosEncontrarComponent } from './pages/on-de-nos-encontrar/on-de-nos-encontrar.component';
import { PedidoDeOracaoComponent } from './pages/pedido-de-oracao/pedido-de-oracao.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conteudo/palavras', component: PalavrasDeDeusComponent },
  { path: 'conteudo/noticias', component: NoticiasComponent },
  { path: 'conteudo/leitura', component: LeituraComponent },
  { path: 'contato/fale-conosco', component: FaleConoscoComponent },
  { path: 'contato/on-de-nos-encontrar', component: OndeNosEncontrarComponent },
  { path: 'pedido-oracao', component: PedidoDeOracaoComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
