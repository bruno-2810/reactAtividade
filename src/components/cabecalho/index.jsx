import './index.scss';


export default function Cabecalho(props) {

    return (

        <div className='cabecalho'>
            <div className='img'><img src="./logo.png" alt="" /></div>

            <div className='texto'>
                <h4>
                    {props.titulo}
                </h4>
            </div>
        </div>


    )

}