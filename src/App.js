import './App.css';
import Header from "./Header/Header"
import Menu from "./Menu/Menu"
import { useState } from 'react'
import InicioPage from './InicioPage/InicioPage'
import Rodape from './Rodape/Rodape'
import SaudePage from './SaudePage/SaudePage'
import ProdutosPage from './ProdutosPage/ProdutosPage'
import DicasPage from './DicasPage/DicasPage'
import GaleriaPage from './GaleriaPage/GaleriaPage'
import ContatoPage from './ContatoPage/ContatoPage'

export default function App() {
  
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
    if(atualPage == 'galeria'){setShowGaleriaPage(true)}
    if(atualPage == 'contato'){setShowContatoPage(true)}
  }

  return (
  
    <div className="App">
      <Header />
      <Menu childToParent={childToParent}/>
      {showInicioPage && <InicioPage />}
      {showSaudePage && <SaudePage />}
      {showProdutosPage && <ProdutosPage />}
      {showDicasPage && <DicasPage />}
      {showGaleriaPage && <GaleriaPage />}
      {showContatoPage && <ContatoPage />}
      <Rodape />
    </div>
  
  );
}
