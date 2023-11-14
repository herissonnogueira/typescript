"use strict";
// no typescript não podemos ter a mesma variável no mesmo arquivo
// para resolver isso usamos namespace estrutura de pastas virtuais
var casting;
(function (casting) {
    let idade = 25;
    // trate a idade como número
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
    nome;
})(casting || (casting = {}));
