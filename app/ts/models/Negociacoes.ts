class Negociacoes{
    //private _negociacoes: Array<Negociacao> = []; pode ser declarado assim, mas na linha abaixo
    //mostramos como declarar de forma resumida
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){

        return this._negociacoes;
    }
}