import { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu({ childToParent }) {
  const [menuShow, setMenuShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  setInterval(() => {
    if (window.screen.width <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, 1000);

  function btnClick() {
    setMenuShow(!menuShow);
    if (window.screen.width > 500) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  function opSelect(op) {
    console.log(op);
    if (op == "inicio") {
      childToParent("inicio");
      btnClick();
    }
    if (op == "saude") {
      childToParent("saude");
      btnClick();
    }
    if (op == "produtos") {
      childToParent("produtos");
      btnClick();
    }
    if (op == "dicas") {
      childToParent("dicas");
      btnClick();
    }
    if (op == "galeria") {
      childToParent("galeria");
      btnClick();
    }
    if (op == "contato") {
      childToParent("contato");
      btnClick();
    }
  }

  return (
    <div
      style={
        !isMobile || menuShow
          ? { visibility: "visible", animation: "ease show-in 300ms forwards" }
          : {
              animation: "ease show-out 300ms forwards",
              animationDuration: "1000ms",
            }
      }
      id="barra-de-menu"
      type="none"
    >
      <div
        style={
          !isMobile || menuShow
            ? {
                visibility: "visible",
                animation: "ease show-in 300ms forwards",
              }
            : {
                animation: "ease show-out 300ms forwards",
                animationDuration: "1000ms",
              }
        }
        id="menu"
        type="none"
      >
        <li>
          <a onClick={() => opSelect("inicio")} href="#">
            Início
          </a>
        </li>
        <li>
          <a onClick={() => opSelect("saude")} href="#">
            Saúde
          </a>
        </li>
        <li>
          <a onClick={() => opSelect("produtos")} href="#">
            Produtos
          </a>
        </li>
        <li>
          <a onClick={() => opSelect("dicas")} href="#">
            Dicas
          </a>
        </li>
        <li>
          <a onClick={() => opSelect("galeria")} href="#">
            Galeria
          </a>
        </li>
        <li>
          <a onClick={() => opSelect("contato")} href="#">
            Contato
          </a>
        </li>
      </div>

      <div className="btn-hamburguer-container">
        <p id="bt-plus" onClick={()=>btnClick()}>
          {menuShow ? "  -  " : "  +  "}
        </p>
      </div>
    </div>
  );
}
