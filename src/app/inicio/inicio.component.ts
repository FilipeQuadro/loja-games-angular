import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../models/produto';
import { CarrinhoService } from '../services/carrinho.service';

// O JavaScript do Bootstrap é carregado pelo angular.json e fica disponível como "bootstrap"
declare const bootstrap: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, AfterViewInit {
  // Lista de objetos criados a partir da classe Produto
  jogos: Produto[] = [
    new Produto(1, 'Estrada Neon', 'Corrida em alta velocidade pela cidade à noite.', 'jogo1.png', 199.9, 'jogo', 249.9),
    new Produto(2, 'Reino de Aço', 'RPG de aventura com mundo aberto e batalhas.', 'jogo2.png', 249.9, 'jogo'),
    new Produto(3, 'Órbita Zero', 'Explore planetas e monte sua base espacial.', 'jogo3.png', 149.9, 'jogo', 199.9),
    new Produto(4, 'Liga FC 27', 'Futebol com times e campeonatos atualizados.', 'jogo4.png', 299.9, 'jogo'),
    new Produto(5, 'Último Sinal', 'Suspense e mistério em uma estação isolada.', 'jogo5.png', 179.9, 'jogo', 219.9),
    new Produto(6, 'Bloco a Bloco', 'Construa e explore um mundo feito de blocos.', 'jogo6.png', 89.9, 'jogo')
  ];

  acessorios: Produto[] = [
    new Produto(7, 'Headset Gamer 7.1', 'Som surround e microfone com cancelamento de ruído.', 'headset.png', 349.9, 'acessorio', 429.9),
    new Produto(8, 'Controle Sem Fio', 'Compatível com PC, console e celular.', 'controller.png', 299.9, 'acessorio'),
    new Produto(9, 'Teclado Mecânico ABNT2', 'Switch blue e iluminação azul.', 'keyboard.png', 279.9, 'acessorio', 329.9)
  ];

  colunas = 3; // quantidade de colunas do Grid List

  constructor(private carrinho: CarrinhoService, private aviso: MatSnackBar) {}

  ngOnInit(): void {
    this.ajustarColunas(window.innerWidth);
  }

  // Depois que o HTML aparece na tela, liga a troca automática do carrossel
  ngAfterViewInit(): void {
    const elemento = document.getElementById('carouselAutoplaying');
    if (elemento && typeof bootstrap !== 'undefined') {
      bootstrap.Carousel.getOrCreateInstance(elemento, { interval: 5000, ride: 'carousel' }).cycle();
    }
  }

  // Sempre que a janela muda de tamanho, ajusta as colunas (responsividade)
  @HostListener('window:resize', ['$event.target.innerWidth'])
  ajustarColunas(largura: number): void {
    if (largura < 600) {
      this.colunas = 1;
    } else if (largura < 992) {
      this.colunas = 2;
    } else {
      this.colunas = 3;
    }
  }

  comprar(produto: Produto): void {
    this.carrinho.adicionar(produto);
    this.aviso.open(`${produto.nome} foi adicionado ao carrinho!`, 'OK', { duration: 2500 });
  }
}
