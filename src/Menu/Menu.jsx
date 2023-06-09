import "./Menu.css";
export default function Menu() {
  return (
    <nav id="barra-de-menu">
      <ul id="menu" type="none">
        <li>
          <a onClick="inicio-container-show" href="#">
            Início
          </a>
        </li>
        <li>
          <a onClick="saude-container-show" href="#">
            Saúde
          </a>
        </li>
        <li>
          <a onClick="produtos-container-show" href="#">
            Produtos
          </a>
        </li>
        <li>
          <a onClick="dicas-container-show" href="">
            Dicas
          </a>
        </li>
        <li>
          <a onClick="galeria-container-show" href="">
            Galeria
          </a>
        </li>
        <li>
          <a onClick="contato-container-show" href="">
            Contato
          </a>
        </li>
      </ul>
      <div className="btn-hamburguer-container">
        <p>+</p>
      </div>
    </nav>
  );
}
