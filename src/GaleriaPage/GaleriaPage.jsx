import "./GaleriaPage.css";
import { useState, useRef } from "react";

export default function GaleriaPage() {
  const [showCortes, setShowCortes] = useState(true);
  const [showPenteados, setShowPenteados] = useState(false);
  const [showAntesDepois, setShowAntesDepois] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [arqModal, setarqModal] = useState();
 
  var modal = document.querySelector(".modal");
  var modalImg = document.querySelector("#modalImg");
  var btClose = document.querySelector("#btClose");

  var tempArq = "";

  var arqsCortes = []
  // ----------------- fotos 1 até 92 --- IMAGENS DOS CORTES
  for (let i = 1; i <= 92; i++) {
    if (i < 10) {
      tempArq = "../galeria/cortes/foto00" + i + ".jpeg";
    }
    if (i >= 10 && i <= 92) {
      tempArq = "../galeria/cortes/foto0" + i + ".jpeg";
    }
    arqsCortes = [...arqsCortes, tempArq]
  }
  // console.log(arqsCortes)

  var arqsPenteados = []
  // // ---------- fotos 201 até 230 ---- IMAGENS DOS PENTEADOS
  for (let i = 201; i <= 230; i++) {
    tempArq = "../galeria/penteados/foto" + i + ".jpeg";
    arqsPenteados = [...arqsPenteados, tempArq]
  }
  // console.log(arqsPenteados)

  var arqsAntesdepois = []
  // // ---------- fotos 301 até 330 ---- IMAGENS DOS ANTES E DEPOIS
  for (let i = 301; i <= 330; i++) {
    tempArq = "../galeria/antesdepois/foto" + i + ".jpeg";
    arqsAntesdepois = [...arqsAntesdepois, tempArq]
  }

  function toModal(arq){
    setShowModal(true)
    setarqModal(arq)
    console.log('toModal ' + arq)
  }

  function tabClick(tab) {
    setShowCortes(false)
    setShowPenteados(false)
    setShowAntesDepois(false)
    if(tab == 'cortes'){ setShowCortes(true)  }
    if(tab == 'penteados'){ setShowPenteados(true)  }
    if(tab == 'antesdepois'){ setShowAntesDepois(true)  }
  }

  function modalOff(e){
    console.log (e)
    setShowModal(false)
  }
  return (
    <>
      {showModal && 
        <div style={showModal?{opacity: 1}:{opacity:0}} className="modal" id = 'imodalContent' >
          <div className="modalContent" 
            onClick={(e)=>modalOff(e)}>
            <img
              src={arqModal}
              alt=""
              id="modalImg" onClick={(e)=>modalOff(e)}
            />
          </div>
          <span id="btClose" onClick={()=>setShowModal(false)}>&times;</span>
        </div>
      }
      <main className="grid">
        <aside className="side">
          <a id="linkCortes" onClick={() => tabClick("cortes")} href="#">
            Cortes e Tratamentos
          </a>
          <br />
          <a id="linkPenteados" onClick={() => tabClick("penteados")}href="#">
            Penteados
          </a>{" "}
          <br />
          <a id="linkAntesdepois" onClick={() => tabClick("antesdepois")}href="#">
            Antes e Depois
          </a>
        </aside>

        <div className="conteiner">
          {showLoading && <div className="loading">
            <img
              className="loadingGif"
              src={require("../imagens/loading.gif")}
              alt=""
            />
            <p>Carregando imagens ...</p>
          </div>}

          {showCortes && (
            <div className="cortes">
              { arqsCortes.map((arq)=>( 
                <img src={arq} className="imagem" onClick={()=>toModal(arq)}/>
              ))}
            </div>
          )}

          {showPenteados && (
            <div className="penteados">
              { arqsPenteados.map((arq)=>( 
                <img src={arq} className="imagem" onClick={()=>toModal(arq)}/>
              ))}

            </div>
          )}

          {showAntesDepois && (
            <div className="antesdepois">
              { arqsAntesdepois.map((arq, idx)=>(
                (idx%2==0)?
                  <p style={{"display":"inlineBlock"}}>Antes
                    <img src={arq} className="imagem" onClick={()=>toModal(arq)}/></p>
                    :
                    <p>
                      <img src={arq} className="imagem" onClick={()=>toModal(arq)}/> Depois 
                    </p> 
              ))} 
            </div>
          )}
        </div>
      </main>
    </>
  );
}
