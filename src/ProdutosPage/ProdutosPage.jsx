import { useState } from "react";
import "./ProdutosPage.css";

export default function ProdutosPage() {

  const [filtro, setFiltro] = useState('')

  var divProduto = document.querySelectorAll('.produto');
  var qtdDivs = divProduto.length-1;
  var vMarcas = document.querySelectorAll('.marca');
  var qtdMarcas = vMarcas.length-1;

  // console.log ('vMarcas: '+ vMarcas.forEach )
  // console.log('total de divs produto.lenght ' + divProduto.length)
  // console.log('total de marcas '+ qtdMarcas)

  for(let i=0; i<=qtdDivs ; i++){
    if(divProduto[i].className.indexOf(filtro)!=-1){
      divProduto[i].classList.remove('hide')
      } else{
      divProduto[i].classList.add('hide');
    }
  }
  for(let i=0; i<=qtdMarcas; i++){
    if(vMarcas[i].id.indexOf(filtro)!=-1 || vMarcas[i].id.indexOf('todos')!=-1){
      vMarcas[i].classList.remove('hide')
      console.log('remove hide : ' +  vMarcas[i].getAttribute('class') + vMarcas[i].getAttribute('id'))
    } else {
      vMarcas[i].classList.add('hide')
      console.log('add hide : ' +  vMarcas[i].getAttribute('class') + vMarcas[i].getAttribute('id'))
    }
  }

  return (
    <>
      <h3>Em breve!</h3>
    </>
  );
}
