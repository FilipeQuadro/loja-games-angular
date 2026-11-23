/**
 * Classe Produto — representa um item vendido na loja.
 * Mostra os conceitos de Orientação a Objetos no TypeScript:
 * atributos com tipos, construtor e métodos.
 */
export class Produto {
  // O construtor recebe os dados e já cria os atributos (public/private)
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public imagem: string,
    public preco: number,
    public categoria: 'jogo' | 'acessorio',
    private precoAntigo?: number   // opcional: só existe quando há promoção
  ) {}

  /** Retorna o preço no formato brasileiro, ex.: R$ 199,90 */
  precoFormatado(): string {
    return this.formatar(this.preco);
  }

  /** Preço com 10% de desconto para pagamento no Pix */
  precoPix(): string {
    return this.formatar(this.preco * 0.9);
  }

  /** Verifica se o produto está em promoção */
  emPromocao(): boolean {
    return this.precoAntigo !== undefined && this.precoAntigo > this.preco;
  }

  /** Percentual de desconto em relação ao preço antigo (ex.: 20) */
  percentualDesconto(): number {
    if (!this.emPromocao()) {
      return 0;
    }
    return Math.round((1 - this.preco / this.precoAntigo!) * 100);
  }

  precoAntigoFormatado(): string {
    return this.precoAntigo ? this.formatar(this.precoAntigo) : '';
  }

  /** Método privado: só pode ser usado dentro da própria classe */
  private formatar(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
