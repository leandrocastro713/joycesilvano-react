import "./InicioPage.css"

export default function InicioPage() {
  return (
    <>
      <h2 id="hoje">Hoje</h2>

      <main className="corpo">
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

          <div className="artigo">
            <br />
          </div>

          <div className="artigo">
            <h2>Joyce Silvano</h2>
            <p className="textos"></p>
            <div className="subartigo">
              <a href="./imagens/joyce-card.jpg" target="_blank">
                <img
                  className="joyce-card"
                  src="./imagens/joyce-card.jpg"
                  alt="Joyce Silvano"
                />
                <br />
              </a>
            </div>
            <p>
              Há tempos percebo a carên&shy;cia de pro&shy;fis&shy;sionais
              especi&shy;aliz&shy;ados em <strong>cabelos crespos</strong> e{" "}
              <strong>ca&shy;cheados</strong>. Pro&shy;curei por uma
              es&shy;pe&shy;ciali&shy;zação que real&shy;mente fosse o que as
              ca&shy;cheadas re&shy;al&shy;mente pro&shy;curam e pre&shy;cisam.
              Sou <strong>Joyce Silvano</strong>,
              es&shy;pe&shy;cia&shy;lis&shy;ta em cabelos crespos e cacheados.
              Atendo em um salão, com todo o su&shy;por&shy;te,
              cui&shy;da&shy;do e aten&shy;ção que você me&shy;re&shy;ce. <br />
              Quer saber mais sobre mim? Tem mais sobre meu tra&shy;ba&shy;lho
              na <a href="./contato.html">
                <i>Página de Contato.</i>
              </a>
            </p>
          </div>

          <div className="artigo">
            <h2>Você sabe a curvatura do seu cabelo?</h2>
            <p className="textos">
              Confira na tabela abaixo, a cur&shyva&shytu&shyra do fio do seu
              ca&shybe&shylo.
            </p>
            <div className="subartigo">
              <a href="./imagens/mapa-curvatura.jpg" target="_blank">
                <img
                  className="imagem1"
                  src="./imagens/mapa-curvatura.png"
                  alt="mapa-de-curvatura"
                />
                <br />
              </a>
            </div>
          </div>

          <div className="artigo">
            <h2>Corte e Penteado da Semana</h2>
            <p className="textos"> </p>
            <div className="subartigo2">
              <a href="./galeria/foto202.jpeg" target="_blank">
                <img
                  className="corpensem"
                  src="./galeria/foto202.jpeg"
                  alt="corte da Semana"
                />
                <br />
              </a>
              <a href="./galeria/foto103.jpeg" target="_blank">
                <img
                  className="corpensem"
                  src="./galeria/foto103.jpeg"
                  alt="corte da Semana"
                />
                <br />
              </a>
            </div>
            <br />
          </div>

          <div className="artigo">
            <h2>Produto em destaque</h2>
            <p className="textos">
              Confira os produtos em des&shyta&shyque des&shyta se&shyma&shyna.
            </p>
            <div className="subartigo2">
              <a href="./produtos/acessorios06.jpg" target="_blank">
                <img
                  className="corpensem"
                  src="./produtos/acessorios06.jpg"
                  alt="arvensis"
                />
                <br />
              </a>
              <a href="./produtos/arvensis01.jpg" target="_blank">
                <img
                  className="corpensem"
                  src="./produtos/arvensis01.jpg"
                  alt="arvensis"
                />
                <br />
              </a>
            </div>
            <br />
          </div>

          <div className="artigo">
            <h2>
              A higienização é o pri&shy;mei&shy;ro passo para tudo dar
              cer&shy;to no cui&shy;da&shy;do da saúde capilar
            </h2>
            <p className="textoEsquerda">
              &check; Primeiro, molhe bem o couro ca&shybe&shylu&shydo,
            </p>
            <p className="textoEsquerda">
              &check; Shampoo somente no cou&shy;ro ca&shy;be&shy;lu&shy;do,
            </p>
            <p className="textoEsquerda">
              &check; Massageie bem com a pon&shy;ta dos de&shy;dos o cou&shy;ro
              ca&shybe&shylu&shydo,
            </p>
            <p className="textoEsquerda">
              &check; Não puxe o sham&shy;poo para o com&shypri&shymen&shyto e
              nem pontas.
            </p>
            <p className="textoEsquerda">
              Você percebeu que a hi&shygie&shyni&shyza&shyção é{" "}
              <strong>somente</strong> no couro ca&shybe&shylu&shydo!
            </p>
            <br />
            <img className="imagem2" src="./imagens/higienização.jpeg" alt="" />
            <br /> <br />
          </div>
        </section>
        {/* <!---------------------------------------------- coluna direita --> */}
        <section className="coluna-direita">
          <div className="artigo">
            <h2> Avisos</h2>
            <a href="./imagens/promo-aguardem.jpg" target="_blank">
              <img id="promo" src="./imagens/promo-aguardem.jpg" />
            </a>
            <p className="textoEsquerda"></p> <br />
          </div>
        </section>
      </main>
    </>
  );
}
