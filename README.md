# Checkpoint Games — Loja de jogos em Angular

Atividade 1 de **Framework com consumo de API (SENAI)**: tela inicial e tela de login de uma loja virtual de jogos feita com **Angular**, **Angular Material** e **Bootstrap**.

🔗 **Site publicado:** https://filipequadro.github.io/loja-games-angular/

## Componentes criados
| Componente | O que tem |
|---|---|
| `menu` | Toolbar do Angular Material com logo, links (rotas), menu suspenso de categorias, carrinho com contador (badge) e botão de login |
| `inicio` | Carousel do Bootstrap, faixa de benefícios, vitrine **Jogos em Promoção** e **Acessórios em Destaque** com Grid List + Cards do Angular Material |
| `login` | Formulário com os campos **usuário** e **senha** (form field + input do Angular Material), mostrar/esconder senha e validação |
| `rodape` | Contato (telefone, e-mail, endereço), links e "Desenvolvido por Filipe" |

## TypeScript e orientação a objetos
- `src/app/models/produto.ts` — **classe** `Produto` com **construtor**, atributos tipados (`public`/`private`, opcional `?`) e **métodos** (`precoFormatado()`, `precoPix()`, `emPromocao()`, `percentualDesconto()`).
- `src/app/inicio/inicio.component.ts` — cria **objetos** com `new Produto(...)` e mostra na tela com `*ngFor`.
- `src/app/services/carrinho.service.ts` — classe de serviço injetada pelo **construtor** dos componentes (carrinho e usuário logado).

## Rotas
- `/#/inicio` → página inicial
- `/#/login` → tela de login (teste: usuário **admin**, senha **123456**)

## Como rodar no computador
```bash
npm install
ng serve
```
Depois abra http://localhost:4200

Para gerar a versão publicada (pasta `docs`, usada pelo GitHub Pages): `npm run build:pages`

## Tecnologias
Angular 18 (módulos, `NgModule`) · Angular Material · Bootstrap 5 · TypeScript · HTML · CSS

Desenvolvido por Filipe.
