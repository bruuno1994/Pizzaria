import './footer.css'

export const Footer = () => {
  return (
    <div className="container-footer">
        <div className="container-item"><address>Rua Logo Ali, nº 2145 - Jardim das Batatinhas</address></div>
        <div>|</div>
        <div className="container-item">Delícias Francanas - 2023 - All Rights Reserved</div>
        <div>|</div>
        <div className="container-item">
        <img src="public/facebook.png"  width ="55px" />
        <img src="public/instagram.png" width ="60px" />
        <img src="public/whatsapp.png" width ="60px" /></div>
    </div>
  )
}