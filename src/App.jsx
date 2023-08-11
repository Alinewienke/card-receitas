import './App.css'
import CardReceita from './components/CardReceita.jsx'
import imagemPateBeringela from '../src/assets/pate.jpg'
import imagemBoloAipim from '../src/assets/bolo_aipim.jpg'
import imagemTortaFrango from '../src/assets/torta_frango.jpg'

let receitaPateBeringela = [
  "1 berinjela picada e descascada",
  "1 dente de alho picado",
  "1 xícara de chá de ricota",
  "2 colheres de sopa de queijo parmesão ralado",
  "2 a 4 colheres de sopa de leite",
  "Óleo",
  "Sal e pimenta a gosto"
]

let receitaBoloAipim = [
  "1 kg.de aipim (macaxeira ou mandioca)",
  "3 ovos",
  "2 xícaras (chá) de açúcar (320 gramas)",
  "300 ml.de leite de coco",
  "1/2 xícara (chá) de manteiga (100 gramas)",
]

let receitaTortaFrango = [
  "3 xícaras (chá) de farinha de trigo (350 g)",
  "1 xícara (chá) de manteiga sem sal, gelada (200 g)",
  "1 colher (sopa) de água gelada",
  "meia colher (chá) de sal",
  "Recheio",
  "2 colheres (sopa) de azeite de oliva",
  "meia cebola média picada",
  "2 tomates maduros, sem pele e sem sementes, picados",
  "1 pitada de sal",
  "1 peito de frango médio já sem pele e sem osso, cozido e desfiado (500 g)",
  "3 colheres (sopa) de azeitonas verdes picadas",
  "meia lata de ervilha em conserva, escorrida",
  "meia lata de milho escorrido",
  "1 bisnaga de requeijão culinário (250 g)",
]

function mostrarReceitaCompleta (receita) {
  // percorre o array 
  // para cada passo dentro do array (receita)
  // retorna um parágrafo com o conteúdo da string de cada passo
  return receita.map(passo => <p>{passo}</p>) // <p>1 berinjela picada e descascada</p>
}

function App() {
  return (
    <>
    <h1>Receitas Práticas</h1>
    <div className='card-container'>
      <CardReceita 
        titulo="Patê de beringela com ricota"
        imagem={imagemPateBeringela}
        receita={mostrarReceitaCompleta(receitaPateBeringela)}
      />
      <CardReceita 
        titulo="Bolo de Aipim"
        imagem={imagemBoloAipim}
        receita={mostrarReceitaCompleta(receitaBoloAipim)}
      />
      <CardReceita 
        titulo="Torta de Frango"
        imagem={imagemTortaFrango}
        receita={mostrarReceitaCompleta(receitaTortaFrango)}
      />
    </div>
    </>
  )
}

export default App
