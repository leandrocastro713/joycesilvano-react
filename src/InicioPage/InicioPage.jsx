import "./InicioPage.css";

export default function InicioPage() {
  return (
    <>
      <h2 id="hoje">Hoje</h2>
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
              <a href={require("../imagens/joyce-card.jpg")} target="_blank">
                <img
                  className="joyce-card"
                  src={require("../imagens/joyce-card.jpg")}
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
                href={require("../imagens/mapa-curvatura.jpg")}
                target="_blank"
              >
                <img
                  className="imagem1"
                  src={require("../imagens/mapa-curvatura.png")}
                  alt="mapa-de-curvatura"
                />
                <br />
              </a>
            </div>
          
          </div>

          <div className="artigo">

            <h2>Corte e Penteado da Semana</h2> <br />
            <div className="subartigo2">
              <a href={require("../galeria/foto202.jpeg")} target="_blank">
                <img
                  className="corpensem"
                  src={require("../galeria/foto202.jpeg")}
                  alt="corte da Semana"
                />
                <br />
              </a>
              <a href={require("../galeria/foto103.jpeg")} target="_blank">
                <img
                  className="corpensem"
                  src={require("../galeria/foto103.jpeg")}
                  alt="corte da Semana"
                />
              </a>
            </div>
          </div>

          <div className="artigo">
            <h2>Produto em destaque</h2>
            <p className="inicio-textos">
              Confira os produtos em destaque desta semana.
            </p><br />
            <div className="subartigo2">
              <a href={require("../produtos/acessorios06.jpg")} target="_blank">
                <img
                  className="corpensem"
                  src={require("../produtos/acessorios06.jpg")}
                  alt="arvensis"
                />
                <br />
              </a>
              <a href={require("../produtos/arvensis01.jpg")} target="_blank">
                <img
                  className="corpensem"
                  src={require("../produtos/arvensis01.jpg")}
                  alt="arvensis"
                />
                <br />
              </a>
            </div>
            <br />
          </div>

          <div className="artigo">
            <h2>
              A higienização é o primeiro passo para tudo dar certo no cuidado
              da saúde capilar
            </h2><br />
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
            <img
              className="imagem2"
              src={require("../imagens/higienização.jpeg")}
              alt=""
            />
          </div>
        </section>

        {/* <!-------------------------------- coluna direita --> */}

        <section className="coluna-direita">
          <div className="artigo">
            <h2> Avisos</h2>
            <a href={require("../imagens/promo-aguardem.jpg")} target="_blank">
              <img id="promo" src={require("../imagens/promo-aguardem.jpg")} />
            </a>
          </div>
        </section>
      </div>

      {/* --------------- corpo-inicio --------------------*/}
    </>
  );
}
