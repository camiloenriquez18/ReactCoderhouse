import Childkart from "../kart/childkart"
import Logo_marca from "../assets/Producto__watch1.png"

export default function Barradenavegacion () {
    return  ( 
    <nav>
        <img className="logo_marca" src={Logo_marca} alt="logo"/>
        <div class="botones_navbar">
            <button class="boton_navbar">Inicio</button>
            <button class="boton_navbar">Comprar</button>
            <button class="boton_navbar">Nosotros</button>
        </div>
        <Childkart />
    </nav>
    )
}