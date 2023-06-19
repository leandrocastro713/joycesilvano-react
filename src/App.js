import './App.css';
import Header from "./Header/Header"
import Menu from "./Menu/Menu"
import { useState } from 'react'
import InicioPage from './InicioPage/InicioPage'

export default function App() {
  const[defaultPage, setDefaultPage] = useState('inicio')
  const[showInicioPage, setShowInicioPage] = useState(true)
  const[showSaudePage, setShowSaudePage] = useState(false)
  const[showDicasPage, setShowDicasPage] = useState(false)
  const[showProdutosPage, setShowProdutosPage] = useState(false)
  const[showGaleriaPage, setShowGaleriaPage] = useState(false)
  const[showContatoPage, setShowContatoPage] = useState(false)
  return (
    <div className="App">
      <Header />
      <Menu />
      {showInicioPage && <InicioPage />}
    </div>
  );
}
