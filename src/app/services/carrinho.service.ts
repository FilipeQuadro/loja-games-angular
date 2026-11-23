import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

/**
 * Serviço do carrinho: guarda os produtos escolhidos e o usuário logado.
 * Como é "providedIn: root", existe uma única instância compartilhada
 * entre o menu, a página inicial e o login.
 */
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: Produto[] = [];
  usuarioLogado: string | null = null;

  adicionar(produto: Produto): void {
    this.itens.push(produto);
  }

  get quantidade(): number {
    return this.itens.length;
  }

  get total(): number {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }

  entrar(usuario: string): void {
    this.usuarioLogado = usuario;
  }

  sair(): void {
    this.usuarioLogado = null;
  }
}
