import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // O construtor recebe o serviço do carrinho (injeção de dependência)
  constructor(public carrinho: CarrinhoService) {}
}
