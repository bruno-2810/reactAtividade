import Cabecalho from '../../components/cabecalho';
import Card from '../../components/card';
import CardVazio from '../../components/cardvazio';
import Rodape from '../../components/rodape';
import './index.scss';


export default function Inicio() {




    return (

        <div className='inicio'>

            <Cabecalho titulo="Atividades" />

            <div className='titulo'>
                <p>Conteúdos</p>
            </div>

            <div className='sim'>
                <div className='cards'>
                    <Card corcabecalho="#A3E5BA" corfundo="#EFFBE2" exibir={false} titulo_card="Componentes" texto=" - Objetos e Lista de Objetos" texto2="- Componentes" data="26/agosto" />

                    <Card corcabecalho="#DCA3E5" corfundo="#EDE2FB" exibir={false} titulo_card="Renderização e Efeito" texto=" - Componentes na Renderização" data="2/setembro" />

                    <Card corcabecalho="#C3C3C3" corfundo="#F2F2F2" exibir={true} titulo_card="Consumindo APIs - Parte 1" texto=" - Componentes na Renderização" data="9/setembro" />

                    <Card corcabecalho="#F6E448" corfundo="#FAF4C1" exibir={false} titulo_card="Prova Prática e Teórica" texto=" - Criando um projeto React" texto2=" - Estilização com SCSS" texto3=" - Navegação entre telas" texto4=" - Variáveis de estado" texto5=" - Renderização de lista" texto6=" - Componentes" data="16/setembro" />

                    <CardVazio />
                </div>
            </div>
            <Rodape />

        </div>
    )

}