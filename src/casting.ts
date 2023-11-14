// no typescript não podemos ter a mesma variável no mesmo arquivo
// para resolver isso usamos namespace estrutura de pastas virtuais
namespace casting {
    let idade: any = 25;    
    // trate a idade como número
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
    nome
}