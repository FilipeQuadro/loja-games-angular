import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  esconderSenha = true;
  erro = '';

  constructor(
    private carrinho: CarrinhoService,
    private router: Router,
    private aviso: MatSnackBar
  ) {}

  /** Confere os dados digitados (usuário de teste: admin / 123456) */
  entrar(): void {
    this.erro = '';

    if (this.usuario.trim() === '' || this.senha.trim() === '') {
      this.erro = 'Preencha o usuário e a senha.';
      return;
    }

    if (this.usuario.trim().toLowerCase() === 'admin' && this.senha === '123456') {
      this.carrinho.entrar(this.usuario.trim().toLowerCase());
      this.aviso.open('Login realizado com sucesso!', 'OK', { duration: 2500 });
      this.router.navigate(['/inicio']);
    } else {
      this.erro = 'Acesso negado. Usuário ou senha incorretos.';
      this.senha = '';
    }
  }

  esqueciSenha(): void {
    this.aviso.open('Ligue (75) 3000-0000 ou escreva para contato@checkpointgames.com.br.', 'OK', { duration: 4000 });
  }
}
