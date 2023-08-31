import "./GaleriaPage.css";
import { useState } from "react";

export default function GaleriaPage() {
  const [showCortes, setShowCortes] = useState(false);
  const [showPenteados, setShowPenteados] = useState(false);
  const [showAntesDepois, setShowAntesDepois] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [arqModal, setarqModal] = useState("");

  var modal = document.querySelector(".modal");
  var modalImg = document.querySelector("#modalImg");
  var btClose = document.querySelector("#btClose");

  var tempArq = "";

  var arqsCortes = [];
  // ----------------- fotos 1 até 94 --- IMAGENS DOS CORTES
  for (let i = 99; i >= 1; i--) {
    if (i < 10) {
      tempArq = "../galeria/cortes/foto00" + i + ".jpg";
    }
    if (i >= 10 && i <= 99) {
      tempArq = "../galeria/cortes/foto0" + i + ".jpg";
    }
    arqsCortes = [...arqsCortes, tempArq];
  }

  var arqsPenteados = [];
  // // ---------- fotos 201 até 230 ---- IMAGENS DOS PENTEADOS
  for (let i = 232; i >= 201; i--) {
    tempArq = "../galeria/penteados/foto" + i + ".jpg";
    arqsPenteados = [...arqsPenteados, tempArq];
  }

  var arqsAntesdepois = [];
  // // ---------- fotos 301 até 330 ---- IMAGENS DOS ANTES E DEPOIS
  for (let i = 373; i >= 302; i -= 2) {
    tempArq = "../galeria/antesdepois/foto" + i + ".jpg";
    arqsAntesdepois = [...arqsAntesdepois, tempArq];
    tempArq = "../galeria/antesdepois/foto" + (i + 1) + ".jpg";
    arqsAntesdepois = [...arqsAntesdepois, tempArq];
  }

  function toModal(arq) {
    setarqModal(arq);
    setShowModal(true);

    console.log("toModal " + arq);
  }

  function tabClick(tab) {
    setShowLoading(true);
    setShowCortes(false);
    setShowPenteados(false);
    setShowAntesDepois(false);
    if (tab == "cortes") {
      setShowCortes(true);
    }
    if (tab == "penteados") {
      setShowPenteados(true);
    }
    if (tab == "antesdepois") {
      setShowAntesDepois(true);
    }
  }

  function modalOff(e) {
    setShowModal(false);
  }
  return (
    <div>
      {/* -------------------------------- MODAL  */}
      <div
        style={{
          opacity: showModal ? "1" : "0",
          zIndex: showModal ? "100" : "-100",
        }}
        className="modal"
        id="imodalContent"
      >
        <div className="modalContent" onClick={(e) => modalOff(e)}>
          <img
            src={arqModal}
            style={{
              zIndex: showModal ? '100' : '-1000',
              opacity: showModal ? "1" : "0",
              scale: showModal ? "1" : ".2",
            }}
            alt=""
            id="modalImg"
            onClick={(e) => modalOff(e)}
          />
        </div>
        <span id="btClose" onClick={() => setShowModal(false)}>
          &times;
        </span>
      </div>

      {/* ------------------------------------------- SELETORES  */}
      <main 
        className="grid"
        onLoad={() => setShowLoading(false)}
        >
        <aside className="side">
          <a id="linkCortes" onClick={() => tabClick("cortes")} href="#">
            Cortes e Tratamentos
          </a>
          <br />
          <a id="linkPenteados" onClick={() => tabClick("penteados")} href="#">
            Penteados
          </a>{" "}
          <br />
          <a
            id="linkAntesdepois"
            onClick={() => tabClick("antesdepois")}
            href="#"
          >
            Antes e Depois
          </a>
        </aside>

        {/* -------------------------------- loading  */}
        {showLoading && (
          <div className="loading">
            <p>Carregando fotos ...</p>
            <img src="./img/loading.gif" alt="" className="loadingGif" />
          </div>
        )}

        <div className="conteiner">
          {/*----------------------------------- DIVs  */}

          {showCortes && (
            <div className="cortes">
              {arqsCortes.map((arq) => (
                <img
                  src={arq}
                  className="imagem"
                  onClick={() => toModal(arq)}
                />
              ))}
            </div>
          )}

          {showPenteados && (
            <div className="penteados">
              {arqsPenteados.map((arq) => (
                <img
                  src={arq}
                  className="imagem"
                  onClick={() => toModal(arq)}
                />
              ))}
            </div>
          )}

          {showAntesDepois && (
            <div className="antesdepois">
              {arqsAntesdepois.map((arq, idx) =>
                idx % 2 == 0 ? (
                  <p style={{ display: "inlineBlock" }}>
                    Antes
                    <img
                      src={arq}
                      className="imagem"
                      onClick={() => toModal(arq)}
                    />
                  </p>
                ) : (
                  <p>
                    <img
                      src={arq}
                      className="imagem"
                      onClick={() => toModal(arq)}
                    />{" "}
                    Depois
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
