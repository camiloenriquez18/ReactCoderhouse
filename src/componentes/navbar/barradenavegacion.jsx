import Childkart from "../kart/childkart"
import Logo_marca from "../assets/Producto__watch1.png"
import { NavLink, Link } from "react-router-dom"

export default function Barradenavegacion () {
    return  ( 
    <><nav>
            <img className="logo_marca" src={Logo_marca} alt="logo" />
            <div class="botones_navbar">
                <button class="boton_navbar">Inicio</button>
                <button class="boton_navbar">Comprar</button>
                <button class="boton_navbar">Nosotros</button>
            </div>
            <Childkart />
        </nav>
        <div className="categories">
        <NavLink to={`category/Gold`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gold</NavLink>
        <NavLink to={`category/leatherstrap`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Leather Strap</NavLink>
        <NavLink to={`category/stainlesssteelstrap`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Stainless Steel Strap</NavLink>
        </div>
                
                </>
    )
}
