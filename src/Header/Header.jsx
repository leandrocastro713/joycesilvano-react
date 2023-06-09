import "./Header.css"

export default function Header() {
  return (
    <header className="top-bar">
      <div className="header">
        <div className="header-title">
          <h1>Joyce Silvano</h1>
          <h4>Cabelos livres</h4>
        </div>
        {/* ----------------------------------- SOCIAL */}
        <div className="social">
          <a
            href="https://www.facebook.com/Joyce-Silvano-cabelos-reais-111105454080975/"
            target="_blank"
          >
            <img src={require("../imagens/logo-facebook.png")} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/joycesilvanocabeloslivres/"
            target="_blank"
          >
            <img src={require("../imagens/logo-instagram.png")} alt="instagram" />
          </a>
          <a
            href="https://wa.me/5551998497549?text=Olá!%20Vim%20direcionada%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
          >
            <img src={require("../imagens/logo-whatsapp.png")} alt="whatsapp" />
          </a>
        </div>
      </div>
    </header>
  );
}
