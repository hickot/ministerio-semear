import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ministerio-semear';

  constructor(private router: Router) {}

  get isAdminPage(): boolean {
    return this.router.url.startsWith('/admin');
  }

  get showHero(): boolean {
    return (
      !this.isAdminPage &&
      !this.router.url.startsWith('/contato/fale-conosco') &&
      !this.router.url.startsWith('/contato/on-de-nos-encontrar') &&
      !this.router.url.startsWith('/pedido-oracao')
    );
  }
}
