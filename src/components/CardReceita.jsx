import './CardReceita.css'
import likeVazio from '../assets/like_vazio.png'
import likePreenchido from '../assets/like_preenchido.png'
import { useState } from 'react'

function CardReceita ({titulo, imagem, receita}) {
    const [imagemBotaoLike, setImagemBotaoLike] = useState(likeVazio)
    const [imagemBotaoDislike, setImagemBotaoDislike] = useState(likeVazio)
    const [deveMostrarReceita, setDeveMostrarReceita] = useState(false)

    function resolverClick (statusLike) {
        if (statusLike === 'like') {
            setImagemBotaoLike(likePreenchido)
        } else {
            setImagemBotaoDislike(likePreenchido)
        }
    }

    function mostrarOuEsconderReceita () {
        if (deveMostrarReceita === false) {
            setDeveMostrarReceita(true)
        }
        if (deveMostrarReceita === true) {
            setDeveMostrarReceita(false)
        }
    }

    return (
        <div className='card-receita'>
            <div className='titulo-card'>
                <p className='titulo'>{titulo}</p>
            </div>
            <div>
                <img className='imagem' src={imagem} alt="CardReceita" />
            </div>
            <button className='botao' onClick={mostrarOuEsconderReceita}>Ver a receita</button>
           <div>
                <button className='botao-like'>
                    <img src={imagemBotaoLike} alt="like" onClick={() => resolverClick('like')} />
                </button>
                <button className='botao-dislike'>
                    <img src={imagemBotaoDislike} alt="dislike" onClick={() => resolverClick('dislike')} />
                </button>
            </div>
            {deveMostrarReceita && <div className='receita'>{receita}</div>}
        </div>
    )

}

export default CardReceita