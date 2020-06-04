class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = []; pode ser declarado assim, mas na linha abaixo
        //mostramos como declarar de forma resumida
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
