import Logo from './assets/logo.svg';
import Feed from './assets/feed.svg';
import Conta from './assets/account_circle.svg';
import Sobre from './assets/info.svg';
import Sair from './assets/logout.svg';
import './styles.css';

export default function Sidebar() {
  return (
    <aside>
        <img src={Logo} alt="Logo do CodeConnect"/>
        <nav>
            <ul className='lista-sidebar'>
                <li>
                    <a href="#" className='item__link-publicacao'>Publicar</a>
                </li>
                <li>
                    <a href="#" className='item__link item__link--ativo'>
                        <img src={Feed} alt="Feed do CodeConnect" />
                        <span>Feed</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Conta} alt="Ícone de Perfil" />
                        <span>Perfil</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Sobre} alt="Ícone Sobre Nós" />
                        <span>Sobre nós</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Sair} alt="Ícone Sair" />
                        <span>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
  );
}