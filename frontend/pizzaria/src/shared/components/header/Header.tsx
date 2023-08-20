import './header.css'

export const Header = () => {
    return(
        <nav className="header">
        <a href=""><img src="public/pizza.png" /></a>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Cardápio</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}