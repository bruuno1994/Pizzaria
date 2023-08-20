import { Footer } from "../../shared/components/footer/Footer"
import { Header } from "../../shared/components/header/Header"
import './home.css'

export const Home = () => {
  return (
    <>
        <Header />

    <div className="container">
        <h1>Pizzaria Delícias Francanas</h1>

    <div className="container-img">
        <img src="public/pizza1.png" />
        <img src="public/pizza2.png" />
    </div>

        <p>Você nunca mais vai querer experimentar outra pizza na cidade!</p><br />


    </div>
    <Footer />
    </>
  )
}
