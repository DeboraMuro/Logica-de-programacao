/*
    Estruturas de repetição
    6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.
*/ 

let x = 100;

while (x <= 200){
    if(x % 2 != 0){
        document.write(x + "<br>");
    }

    x++;
}

//Explicação comentada:
//1-Primeiro é definido que a variável x recebe o valor de 100, pois a questão pede números ímpares entre 100 e 200;
//2-Depois while x <= 200 é estipulado para que o algoritimo percorra todos os números até 200 (while = enquanto);
//3-O if dentro do while foi colocado para informar a condição de x sendo diferente de divisores de 2, mostrando 
//na tela do html criado o x e uma quebra de linha em seguida;
//4-O x++ ainda dentro do while indica que o valor de x que está dentro do parâmetro estipulado no while e que já passsou pelo if 
//deve ser acrescido de + 1, lembrando que x++ é igual a x = x + 1;
//5-Dessa forma os números irão rodar de 100 a 200, aparecendo no html apenas os números ímpares, que não são divisores de 2, e de forma
//visual se apresentando como uma lista vertical devido a quebra de linha. 

/*
    Algoritmos condicionais
    5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.
*/

let y = -4;

if(y > 0){
    document.write(y * 2);
}else{
    document.write(y * 3);
}

//Explicação comentada:
//1-Inialmente foi escolhida a variavel y para ser trabalhada com o valor atribuido escolhido de -4;
//2- Foi utlizado o IF/ELSE para trabalhar com a condicional (if= se, else= senão);
//3- Para trabalhar com números positivos foi colocado que se o y for maior que 0, deve aparecer na tela do html criado
//o valor de y x 2 (o dobro desse número);
//4- Para trabalhar com números negativos foi colocado o else, pois caso o numero não seja positivo (seja negativo) ele entra nessa condição,
//em que deve aparecer na tela do html criado o valor de y x 3 (o triplo desse número).