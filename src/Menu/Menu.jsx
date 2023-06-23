import { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu ({childToParent}) {
  const [menuShow, setMenuShow ] = useState (true)
  const [isMobile, setIsMobile] = useState (false)
  const [dataChild, setDataChild] = useState()

  setInterval(()=>{
    if(window.screen.width<501){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  },1000)

 
  function btnClick(){
    setMenuShow(!menuShow)
      if(window.screen.width>500){
        setIsMobile(false)
      }else{setIsMobile(true)}
  }

  return (
    <div style={!isMobile || menuShow?{visibility:'visible', 
      animation: 'ease show-in 1000ms forwards'}
      :{animation:'ease show-out 1000ms forwards', 
      animationDuration:'1000ms'}} 
      id="barra-de-menu" type ='none' >
      <div style={!isMobile || menuShow?{visibility:'visible', 
        animation: 'ease show-in 1000ms forwards'}
        :{animation: 'ease show-out 1000ms forwards', 
        animationDuration:'1000ms'}} 
        id='menu' type ='none'>
        <li>
          <a onClick={()=>childToParent('inicio')} href="#">
            Início
          </a>
        </li>
        <li>
          <a onClick={()=>childToParent('saude')} href="#">
            Saúde
          </a>
        </li>
        <li>
          <a onClick='' href="#">
            Produtos
          </a>
        </li>
        <li>
          <a onClick="dicas-container-show" href="#">
            Dicas
          </a>
        </li>
        <li>
          <a onClick="galeria-container-show" href="#">
            Galeria
          </a>
        </li>
        <li>
          <a onClick="contato-container-show" href="#">
            Contato
          </a>
        </li>
      </div>

      <div className="btn-hamburguer-container">
        <p id="bt-plus" onClick={()=>btnClick()}>
          {menuShow?'  -  ':'  +  '}
        </p>
      </div>

    </div>
  );
}
