import Item from './item.js'

function List() {
    return (
        <>
            <h2>Minha Lista</h2>
            <ul>
                <Item marca="Ferrari" ano_lancamento = {2020} />
                <Item marca="Fiat" ano_lancamento = {1980} />
                <Item marca="Uno" ano_lancamento = {1980} />
                <Item marca="Chervolet" ano_lancamento={2022} />
            </ul>
        </>
    )
}

export default List