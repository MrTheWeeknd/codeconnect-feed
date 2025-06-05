import {useState} from 'react';
import './styles.css';

export default function barraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa);

    return (
        <input type="search" 
        className='barra-pesquisa' 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
        placeholder="Digite o que você procura" />
    )
}   