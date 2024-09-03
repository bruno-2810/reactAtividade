import './index.scss';




export default function Card(props) {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'
    let exibir = true;


    return (


        <div className='cards'>
            <div className='card' style={{ backgroundColor: props.corfundo }}>
                <div className='card-cabecalho' style={{ backgroundColor: props.corcabecalho }}>
                    <h2>{props.titulo_card}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>Assuntos</h3>
                    <pre>
                        {props.texto} <br /> {props.texto2} <br /> {props.texto3} <br /> {props.texto4} <br /> {props.texto5} <br /> {props.texto6} <br />
                    </pre>
                </div>
                <p className='tag'>{props.data}</p>
                {props.exibir && <p className='tag'>Entrega Trab.</p>}
            </div>
        </div>


    )


}