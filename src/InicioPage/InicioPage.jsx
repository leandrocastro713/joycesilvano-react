import "./InicioPage.css";
import { useState, useLayoutEffect } from "react";
import ReactPlayer from "react-player/youtube";
import ImageLink from "./ImageLink/ImageLink";

export default function InicioPage() {
  const [hoje, setHoje] = useState("");

  let myDate = "";
  let dds = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  let mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const datadehoje = new Date();
  let day = datadehoje.getDay();
  let month = datadehoje.getMonth();
  let year = datadehoje.getFullYear();

  myDate =
    dds[day] +
    ", " +
    datadehoje.getDate() +
    " de " +
    mes[month] +
    " de " +
    year;
  console.log(myDate);

  useLayoutEffect(() => {
    setHoje(myDate);
  }, 1);

  return (
    <>
      <h2 id="hoje">{hoje}</h2>
      <div className="corpo-inicio">
        <section className="coluna-esquerda">
          <div className="tempo1" id="cont_2a0ca20bd00cf475dfec3c63c18724a3">
            <script
              type="text/javascript"
              async
              src="https://www.tempo.com/wid_loader/2a0ca20bd00cf475dfec3c63c18724a3"
            ></script>
          </div>

          <div className="tempo2" id="cont_a5aa60b2380d5c122c4fac8a76044c3c">
            <script
              type="text/javascript"
              async
              src="https://www.tempo.com/wid_loader/a5aa60b2380d5c122c4fac8a76044c3c"
            ></script>
          </div>

          {/* <div className="artigo">
            <br />
          </div> */}

          <div className="artigo">
            <h2>Joyce Silvano</h2>

            <div className="subartigo">
              <a
                href="./img/joyce-agenda-aberta.jpg"
                target="_blank"
              >
                <img
                  className="joyce-card"
                  src="./img/joyce-agenda-aberta.jpg"
                  alt="Joyce Silvano"
                />
                <br />
              </a>
            </div>
            <p>
              Há tempos percebo a carência de profissionais especializados em
              cabelos crespos e cacheados. Procurei por uma especialização que
              realmente fosse o que as cacheadas realmente procuram e precisam.
              Sou Joyce Silvano, especialista em cabelos crespos e cacheados.
              Atendo em um salão, com todo o suporte, cuidado e atenção que você
              merece. <br />
              Quer saber mais sobre mim? Tem mais sobre meu trabalho na{" "}
              <a href="./contato.html">
                <i>Página de Contato.</i>
              </a>
            </p>
          </div>

          <div className="artigo">
            <h2>Você sabe a curvatura do seu cabelo?</h2>
            <p className="textos textoEsquerda inicio-texto">
              Confira na tabela abaixo, a curvatura do fio do seu cabelo.
            </p>
            <div className="subartigo">
              <a
                href="./img/mapa-curvatura.jpg"
                target="_blank"
              >
                <img
                  className="imagem1"
                  src="./img/mapa-curvatura.png"
                  alt="mapa-de-curvatura"
                />
                <br />
              </a>
            </div>
          </div>

          <div className="artigo">
            <h2>Corte e Penteado da Semana</h2> <br />
            <div className="subartigo2">
              <a
                href="./galeria/cortes/foto086.jpg"
                target="_blank"
              >
                <img
                  className="corpensem"
                  src="./galeria/cortes/foto086.jpg"
                  alt="corte da Semana"
                />
                <br />
              </a>
              <a
                href="./galeria/cortes/foto087.jpg"
                target="_blank"
              >
                <img
                  className="corpensem"
                  src="./galeria/cortes/foto087.jpg"
                  alt="corte da Semana"
                />
              </a>
              <a
                href="./galeria/cortes/foto092.jpg"
                target="_blank"
              >
                <img
                  className="corpensem"
                  src="./galeria/cortes/foto092.jpg"
                  alt="corte da Semana"
                />
              </a>
              <a
                href="./galeria/penteados/foto231.jpg"
                target="_blank"
              >
                <img
                  className="corpensem"
                  src="./galeria/penteados/foto231.jpg"
                  alt="corte da Semana"
                />
              </a>
            </div>
          </div>

          <div className="artigo ultimo">
            <h2>
              A higienização é o primeiro passo para tudo dar certo no cuidado
              da saúde capilar
            </h2>
            <br />
            <p className="textoEsquerda">
              Primeiro, molhe bem o couro cabeludo,
            </p>
            <p className="textoEsquerda">Shampoo somente no couro cabeludo,</p>
            <p className="textoEsquerda">
              Massageie bem com a ponta dos dedos o couro cabeludo,
            </p>
            <p className="textoEsquerda">
              Não puxe o shampoo para o comprimento e nem pontas.
            </p>
            <p className="textoEsquerda">
              Você percebeu que a higienização é somente no couro cabeludo!
            </p>
            <br />
            <ReactPlayer
              className="video-higi"
              width="95%"
              url="https://www.youtube.com/shorts/8IIHEjunDKI"
            />
            <br />
          </div>
        </section>

        {/* <!-------------------------------- coluna direita --> */}

        <section className="coluna-direita">

          <div className="artigo">
            <h2> Avisos</h2>
            <ImageLink link="./img/promoções.jpg"  />

            <ImageLink link="./img/promoções-higienização.jpg" />
          </div>

        </section>
      </div>

      {/* --------------- corpo-inicio --------------------*/}
    </>
  );
}
