import { useState } from "react";
import "./ProdutosPage.css";
import Tags from "./Tags/Tags";

export default function ProdutosPage() {
  const [filtro, setFiltro] = useState("");

  var divProduto = document.querySelectorAll(".produto");
  var qtdDivs = divProduto.length - 1;
  var vMarcas = document.querySelectorAll(".marca");
  var qtdMarcas = vMarcas.length - 1;

  for (let i = 0; i <= qtdDivs; i++) {
    if (divProduto[i].className.indexOf(filtro) != -1) {
      divProduto[i].classList.remove("hide");
    } else {
      divProduto[i].classList.add("hide");
    }
  }
  for (let i = 0; i <= qtdMarcas; i++) {
    if (
      vMarcas[i].id.indexOf(filtro) != -1 ||
      vMarcas[i].id.indexOf("todos") != -1
    ) {
      vMarcas[i].classList.remove("hide");
      console.log(
        "remove hide : " +
          vMarcas[i].getAttribute("class") +
          vMarcas[i].getAttribute("id")
      );
    } else {
      vMarcas[i].classList.add("hide");
      console.log(
        "add hide : " +
          vMarcas[i].getAttribute("class") +
          vMarcas[i].getAttribute("id")
      );
    }
  }

  return (
    <>
      <div className="produtos_container">
        <div className="produto_card">
          <a href={require("../../src/produtos/apse01.jpeg")} target="_blank">
            <img src={require("../../src/produtos/apse01.jpeg")} alt="" />
          </a>
          <div className="card_text">
            <a
              href="https://api.whatsapp.com/send/?phone=5551998497549&text=Ol%C3%A1%21+Vim+direcionada+do+site+e+tenho+interesse+no+produto+Apse+Mousse+Nutritivo.&type=phone_number&app_absent=0"
              target="blank"
            >
              <h2>Apse Mousse Nutritivo</h2>
              <Tags
                tags={["ANTIFRIZ", "DEFINIÇÃO", "PROTEÇÃO TÉRMICA", "VOLUME"]}
              />
              <p>
                Chegou a solução para o frizz e definição mais duradoura dos
                seus cachos, com o volume que você ama! Hidrata e defini de
                forma mais duradoura. Produto com proteção térmica. Cabelos
                hidratados e nutridos e a nova solução para o seu day after.
              </p>
            </a>
          </div>
        </div>

        <div className="produto_card">
          <a href={require("../../src/produtos/apse02.jpeg")} target="_blank">
            <img src={require("../../src/produtos/apse02.jpeg")} alt="" />
          </a>
          <div className="card_text">
            <a
              href="https://api.whatsapp.com/send/?phone=5551998497549&text=Ol%C3%A1%21+Vim+direcionada+do+site+e+tenho+interesse+no+produto+Apse+Gelatina+Ativadora.&type=phone_number&app_absent=0"
              target="blank"
            >
              <h2>Apse Gelatina Ativadora</h2>
              <Tags tags={["ANTIFRIZ", "DEFINIÇÃO", "FIXAÇÃO", "DAYAFTER"]} />
              <p>
                Indispensável para quem gosta de definição! Super versátil, pode
                ser usado nos fios secos ou molhados – misturando ao ativador de
                cachos ou sozinho. Liberado para Low Poo e No poo Uso diário –
                Sem enxágue – Não deixa resíduo! Para cabelos cacheados,
                ondulados, crespos ou em transição capilar pH 3,0 a 4,0
                aproximadamente. .
              </p>
            </a>
          </div>
        </div>

        <div className="produto_card">
          <a href={require("../../src/produtos/apse03.jpeg")} target="_blank">
            <img src={require("../../src/produtos/apse03.jpeg")} alt="" />
          </a>
          <div className="card_text">
            <a
              href="https://api.whatsapp.com/send/?phone=5551998497549&text=Ol%C3%A1%21+Vim+direcionada+do+site+e+tenho+interesse+no+produto+Apse+Ativador+e+Modelador.&type=phone_number&app_absent=0"
              target="blank"
            >
              <h2>Apse Ativador e Modelador</h2>
              <Tags tags={["ANTIFRIZ", "DEFINIÇÃO", "FIXAÇÃO", "BRILHO"]} />
              <p>
                Cachos definidos, controlados e sem frizz. Hidrata e desenvolve
                o movimento natural dos cabelos. Uso diário – Sem enxágue – Não
                deixa resíduo! Para cabelos ondulados, cacheados, crespos e em
                transição! pH 3,0 a 4,0 aproximadamente.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
