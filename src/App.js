import './App.css';
import Header from "./Header/Header"
import Menu from "./Menu/Menu"
import { useState, useEffect } from 'react'
import InicioPage from './InicioPage/InicioPage'
import Rodape from './Rodape/Rodape'
import SaudePage from './SaudePage/SaudePage'
import ProdutosPage from './ProdutosPage/ProdutosPage'
import DicasPage from './DicasPage/DicasPage'

export default function App() {
  
  const[defaultPage, setDefaultPage] = useState('inicio')
  const[atualPage, setAtualPage] = useState('inicio')
  
  const[showInicioPage, setShowInicioPage] = useState(true)
  const[showSaudePage, setShowSaudePage] = useState(false)
  const[showProdutosPage, setShowProdutosPage] = useState(false)
  const[showDicasPage, setShowDicasPage] = useState(false)
  const[showGaleriaPage, setShowGaleriaPage] = useState(false)
  const[showContatoPage, setShowContatoPage] = useState(false)
  
  function hidePages(){
    setShowInicioPage(false)
    setShowSaudePage(false)
    setShowProdutosPage(false)
    setShowDicasPage(false)
    setShowGaleriaPage(false)
    setShowContatoPage(false)
  }

  const childToParent = (atualPage) => {
    setAtualPage(atualPage)
    hidePages()
    if(atualPage == 'inicio'){setShowInicioPage(true)}
    if(atualPage == 'saude'){setShowSaudePage(true)}
    if(atualPage == 'produtos'){setShowProdutosPage(true)}
    if(atualPage == 'dicas'){setShowDicasPage(true)}
  }

  return (
  
    <div className="App">
      <Header />
      <Menu childToParent={childToParent}/>
      {showInicioPage && <InicioPage />}
      {showSaudePage && <SaudePage />}
      {showProdutosPage && <ProdutosPage />}
      {showDicasPage && <DicasPage />}
      <Rodape />
    </div>
  
  );
}
