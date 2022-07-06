import react from 'react';
import '../stylesheet/Testimonio.css';



function Testimonio(props) {
  return (
    <article className='cont-testimonio' >
      <img className='imagen-testimonio'
        src={require(`../imagenes/${props.img}.png`)}
        al t= {`foto de ${props.alt}`}
        />
      <div className='cont-text-testimonio'>
        <h2 className='nombre-testimonio'>{props.nombre} en {props.pais}</h2>
        <h4 className='cargo-testimonio'>{props.cargo} en {props.empresa}</h4>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>

    </article>
  );
}

//  por defecto  

export default Testimonio;

