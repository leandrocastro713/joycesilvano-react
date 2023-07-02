import "./Rodape.css"

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="left-footer">
        <p className="lf-text">
          Joyce Silvano Cabelos Livres
          <br />
        </p>
        <div className="wp-footer">
          <img src={require("../imagens/logo-whatsapp.png")} alt="" />
          <p>(51) 99849-7549</p>
        </div>
        <div className="ig-footer">
          <img src={require("../imagens/logo-instagram.png")} alt="" />
          <p>joycesilvanocabeloslivres</p>
        </div>
        <div className="fb-footer">
          <img src={require("../imagens/logo-facebook.png")} alt="" />
          <p>joycesilvanocabeloslivres</p>
        </div>
        {/* <div className="lf-text">
          <img id="local-icon" src={require("../imagens/local.png")} alt="" />
          <a href="https://goo.gl/maps/Zr7eW77xYXTCKorJ9" target="_blank">
            <p>Em breve novo local de atendimento</p>
            <p>Viamão - RS</p>
          </a>
        </div> */}
      </div>

      <div className="right-footer">
        <p className="rf-text">
          "Site produzido por <a href="https://portifolio2-eight.vercel.app/" target="_blank">
            <strong>@urzzomidia</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}
