import { waitFor } from "@testing-library/react";
import "./GaleriaPage.css";
import { useState, useRef } from "react";
import { wait } from "@testing-library/user-event/dist/utils";

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
  // ----------------- fotos 1 até 94 --- IMAGENS DOS CORTES
  for (let i = 99; i >= 1; i--) {
    if (i < 10) {
      tempArq = "../galeria/cortes/thumbs/foto00" + i + ".jpg";
    }
    if (i >= 10 && i <= 99) {
      tempArq = "../galeria/cortes/thumbs/foto0" + i + ".jpg";
    }
    arqsCortes = [...arqsCortes, tempArq]
  }
  // console.log(arqsCortes)

  var arqsPenteados = []
  // // ---------- fotos 201 até 230 ---- IMAGENS DOS PENTEADOS
  for (let i = 230; i >= 201; i--) {
    tempArq = "../galeria/penteados/thumbs/foto" + i + ".jpg";
    arqsPenteados = [...arqsPenteados, tempArq]
  }
  // console.log(arqsPenteados)

  var arqsAntesdepois = []
  // // ---------- fotos 301 até 330 ---- IMAGENS DOS ANTES E DEPOIS
  for (let i = 363; i >= 302; i-=2) {
    console.log(i)
    tempArq = "../galeria/antesdepois/thumbs/foto" + i + ".jpg";
    arqsAntesdepois = [...arqsAntesdepois, tempArq]
    tempArq = "../galeria/antesdepois/thumbs/foto" + (i+1) + ".jpg";
    arqsAntesdepois = [...arqsAntesdepois, tempArq]
  }

  function toModal(arq){
     setarqModal(arq)
     setShowModal(true)
   
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
    setarqModal('')
    console.log (e)
    setShowModal(false)
  }
  return (
    <>
      {/* {showModal &&  */}
        <div 
          style={
            {opacity: showModal? '1' : '0', 
            zIndex: showModal? '100' : '0'}
            } 
            className="modal" id = 'imodalContent' >
          <div 
            className="modalContent" 
            onClick={(e)=>modalOff(e)}>
            
            <img 
              src={arqModal}
              style={
                {scale: showModal? '1' : '.2'}
              }
              alt=""
              id="modalImg" onClick={(e)=>modalOff(e)}
            />
          </div>
          <span id="btClose" onClick={()=>setShowModal(false)}>&times;</span>
        </div>
      {/* } */}
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
              src='./img/loading.gif'
              alt=""
            />
            <p>Carregando imagens ...</p>
          </div>}

          {showCortes && (
            <div className="cortes">
              { arqsCortes.map((arq)=>( 
                <img src={arq} className="imagem" onClick={()=>toModal(arq.replace('/thumbs','').replace('.jpg','.jpeg'))}/>
              ))}
            </div>
          )}

          {showPenteados && (
            <div className="penteados">
              { arqsPenteados.map((arq)=>( 
                <img src={arq} className="imagem" onClick={()=>toModal(arq.replace('/thumbs','').replace('.jpg','.jpeg'))}/>
              ))}

            </div>
          )}

          {showAntesDepois && (
            <div className="antesdepois">
              { arqsAntesdepois.map((arq, idx)=>(
                (idx%2==0)?
                  <p style={{"display":"inlineBlock"}}>Antes
                    <img src={arq} className="imagem" onClick={()=>toModal(arq.replace('/thumbs','').replace('.jpg','.jpeg'))}/></p>
                    :
                    <p>
                      <img src={arq} className="imagem" onClick={()=>toModal(arq.replace('/thumbs','').replace('.jpg','.jpeg'))}/> Depois 
                    </p> 
              ))} 
            </div>
          )}
        </div>
      </main>
    </>
  );
}
