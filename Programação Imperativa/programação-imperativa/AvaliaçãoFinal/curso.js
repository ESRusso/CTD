import {lista_de_estudantes} from './estudantes.js' // 7
import {Aluno} from './aluno.js'
var curso = { // 3
    nome_do_curso: "TI", // 3
    nota_de_aprovacao: 6, // 3
    faltas_maximas: 2, // 3
    lista_de_estudantes: lista_de_estudantes, // 3,7
    adicionar_aluno: (aluno) => curso.lista_de_estudantes.push(aluno), // 4
    aprovado: (aluno) => { // 5
        if(aluno.calcularMedia() >= curso.nota_de_aprovacao && 
            aluno.qtd_faltas < curso.faltas_maximas)
            return true
        if(aluno.qtd_faltas == curso.faltas_maximas)
            return aluno.calcularMedia() >= 1.1*curso.nota_de_aprovacao
        return false
    },
    aprovados: () => curso.lista_de_estudantes.map(aluno => curso.aprovado(aluno)) // 6
}

console.log('Estudantes antes de adicionar o Jurandir: ', curso.lista_de_estudantes)
let jurandir = new Aluno('Jurandir', 100, [0])
curso.adicionar_aluno(jurandir)
console.log('Estudantes depois de adicionar o Jurandir: ', curso.lista_de_estudantes)
let jurandirAprovado = curso.aprovado(jurandir)
console.log('Jurandir está aprovado:', jurandirAprovado)
let mapeamentoDeAprovacaoPorAluno = curso.aprovados()
console.log('Status de aprovação por aluno: ', mapeamentoDeAprovacaoPorAluno)
console.log('Média do João:', curso.lista_de_estudantes[0].calcularMedia())
console.log('Faltas do João antes de faltar:', curso.lista_de_estudantes[0].qtd_faltas)
curso.lista_de_estudantes[0].faltas()
console.log('Faltas do João depois de faltar:', curso.lista_de_estudantes[0].qtd_faltas)