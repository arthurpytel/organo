import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto"> 
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} type="text" placeholder={props.placeholder} required={props.obrigatorio}></input>      
        </div>
    );
}

export default CampoTexto;
