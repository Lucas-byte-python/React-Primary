import '../css/newStyle.css'

function Pessoa({nome, idade, profissao}) {
    return(
        <div>
            <img src= "https://i.pinimg.com/474x/64/4d/e6/644de67473be1f4e214de7fd87037dac.jpg" />
            <p> Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;