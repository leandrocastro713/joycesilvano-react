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
          <img src="./img/logo-whatsapp.png" alt="" />
          <p>(51) 99849-7549</p>
        </div>
        <div className="ig-footer">
          <img src="./img/logo-instagram.png" alt="" />
          <p>joycesilvanocabeloslivres</p>
        </div>
        <div className="fb-footer">
          <img src="./img/logo-facebook.png" alt="" />
          <p>joycesilvanocabeloslivres</p>
        </div>
        <div className="lf-text">
          <img id="local-icon" src="./img/local.png" alt="" />
          <a href="https://goo.gl/maps/9hjxA34xCZ2L59i47" target="_blank">
            <p>Avenida Bento Gonsalves, nº 2115</p>
            <p>Porto Alegre - RS</p>
          </a>
        </div>
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
