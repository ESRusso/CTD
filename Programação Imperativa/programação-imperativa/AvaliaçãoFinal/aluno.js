export class Aluno { // 1
    constructor(nome,qtd_faltas,notas) { // 1
        this.nome = nome
        this.qtd_faltas = qtd_faltas 
        this.notas = notas
    }

    calcularMedia() { // 2
        return this.notas.reduce((acc,a)=>acc+a,0)/this.notas.length
    }

    faltas() { // 2
        this.qtd_faltas++
    }
}
