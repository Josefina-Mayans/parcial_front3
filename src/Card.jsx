//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({usuarios}) {
    return (
        <div>
        <h2>Usuarios</h2>
        {usuarios.map((usuario,index)=>(
            <div key={index}> 
            <h3>Hola {usuario.nombre}!</h3>
            <h3>Sabemos que tu color favorito es {usuario.color}</h3>
            </div>
        )
            
        )
        }
        </div>
    )

  }
  
  export default Card;


