import { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu() {
  const [menuShow, setMenuShow ] = useState (true)
  const [isMobile, setIsMobile] = useState (false)
  
  useEffect(() => {
    console.log('useefect')
    console.log(window.screen.width)
  });

  setInterval(()=>{
    if(window.screen.width<501){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    // console.log('set interval '+ window.screen.width + ', menuShow: ' + 
              // menuShow + ' , isMobile: ' + isMobile)
  },1000)

  function btnClick(){
    setMenuShow(!menuShow)
      if(window.screen.width>500){
        setIsMobile(false)
      }else{setIsMobile(true)}
  }


  return (
    <div style={!isMobile || menuShow?{visibility:'visible'}
          :{visibility:'collapse'}} type ='none'id="barra-de-menu">
      <div style={!isMobile || menuShow?{visibility:'visible'}
            :{visibility:'collapse'}} id='menu' type ='none'>
       {/* <div id="menu" type="none"> */}
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
      </div>

      <div className="btn-hamburguer-container">
        <p id="bt-plus" onClick={()=>btnClick()}>
          {menuShow?'  -  ':'  +  '}
        </p>
      </div>

    </div>
  );
}
