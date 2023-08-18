import { useState } from "react"

export default function Form({onAddUsuario}){
    const [nombre,setNombre] = useState("");
    const [color,setColor] = useState("");


    const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();
    if (sinEspacios.length > 2) {
    return true;
    } else {
    return false;
    }
    };
    
    
    const validarColor = (color) => {
    if (color.length > 5) {
    return true;
    } else {
    return false;
    }
    };

    const onHandleSubmit= (e)=>{
        e.preventDefault();
    const nombreValido = validarNombre(nombre);
    const colorValido = validarColor(color);

    if (!nombreValido || !colorValido) {
    alert("Por favor chequea que la información sea correcta");
    } else {
    onAddUsuario({nombre,color})
    setNombre("")
    setColor("")
}

    }
    

    return(
            <form onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="text" placeholder="Ingresa tu color favorito" value={color} onChange={(e)=>setColor(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
    )

}