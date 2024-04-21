import './css/style.css' //Importar o CSS
import './App.css' //Importar o CSS
import SayMyName from './component/SayMyName' //Importar outras funções de arquivos
import Pessoa from './component/pessoa' //Importar outras funções de arquivos
import List from './component/list' //Importar outras funções de arquivos

const cal = "Operadores!" //Variáveis novas
const react = "Essa é a logo do react!" //Outra variável

//Funções e operações matemáticas
function som(a, b) {
  return (a + b)
}
function sub(a, b) {
  return (a - b)
}
function mult(a, b) {
  return (a * b)
}
function App() {
  //Retornar valor
  return (
    //Html básico com "className" para criar uma classe e importando funções e colocando imagem
    <div className="App"> 
      <h1><i>Começando algo novo no react!</i></h1>
      <SayMyName nome = "Lucas" /> 
      <Pessoa nome = "Lucas Santil" idade = "16" profissao = "Estudante" /> 
      <p className="text">O React é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, que se destaca como uma ferramenta poderosa para a criação de interfaces de usuário dinâmicas e eficientes. Utilizado para construir componentes reutilizáveis e declarativos, o React simplifica o desenvolvimento de aplicações web, permitindo que os desenvolvedores foquem na construção de UIs interativas sem se preocupar com a complexidade do gerenciamento de estado. A sua abordagem baseada em componentes facilita a manutenção do código e a escalabilidade do projeto. Além disso, a adoção do conceito de "Virtual DOM" contribui para um desempenho otimizado, melhorando a eficiência nas atualizações da interface. Com uma comunidade ativa e uma vasta gama de bibliotecas e ferramentas adicionais, o React tornou-se uma escolha popular para o desenvolvimento moderno de aplicações web.</p>
      <h2>{cal}</h2> 
      <h4>Soma: {som(1, 2)} ( + ) </h4> 
      <h4>Subtração: {sub(4, 2)} ( - )</h4> 
      <h4>Multiplicação: {mult(10, 2)} ( x )</h4> 
      <List /> 
      <p className="newGem">{react}</p>
      <center><img src="https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png" alt="React" /></center> 
    </div>
  )
}

export default App; //Exportar o arquivo
