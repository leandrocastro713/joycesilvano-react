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

function filtro_todos(){
  var divProduto = document.querySelectorAll('.produto');
  var vTodos = document.querySelector('#todos')
  var vMarcas = document.querySelectorAll('.marca')
  var qtdDivs = divProduto.length-1;
  for(let i=0; i<vMarcas.length; i++){
    vMarcas[i].classList.remove('hide')
  }
  vTodos.classList.add('hide')
  for(let i=0; i<=qtdDivs; i++){
      divProduto[i].classList.remove('hide');
  }
}

  return (
    <>
      {/* // <!------------------------------------ PARTE 1--> */}

      <div className="grid">
        <aside className="choose" id='choose'>
          {(filtro == 'apse' || filtro == '') &&
            <div id="apse" className="marca">
            <a>
              <img src={require("../imagens/apse.png")} onClick={()=>setFiltro("apse")} />
            </a>
          </div>}
          {(filtro == 'arvensis' || filtro == '') &&
          <div id="arvensis" className="marca">
            <a>
              <img src={require("../imagens/arvensis.png")} onClick={()=>setFiltro("arvensis")} /> 
            </a>
          </div>}
          {(filtro == 'auri' || filtro == '') &&
          <div id="auri" className="marca">
            <a>
              <img src={require("../imagens/auri.png")} onClick={()=>setFiltro("auri")} />
            </a>
          </div>}
          {(filtro == 'magic' || filtro == '') &&
          <div id="magic" className="marca">
            <a>
              <img src={require("../imagens/magic-beauty.png")} onClick={()=>setFiltro("magic")} />
            </a>
          </div>}
          {(filtro == 'widicare' || filtro == '') &&
          <div id="widicare" className="marca">
            <a>
              <img src={require("../imagens/widicare.png")} onClick={()=>setFiltro("widicare")} />
            </a>
          </div>}
          {(filtro == 'acessorios' || filtro == '') &&
          <div id="acessorios" className="marca">
            <a>
              <img src={require("../imagens/acessorios.png")} onClick={()=>setFiltro("acessorios")} />
            </a>
          </div>}
          <div id="todos" className="marca hide">
            <a>
              <img src={require("../imagens/todos.png")} onClick={()=>setFiltro("")} />
            </a>
          </div>
        </aside>

        {/* <!----------------------------- container --> */}

        <div className="container">
          <p className='texto-aviso' id="aviso">
            <b>Produtos que eu indico</b>
          </p>
          <p className="texto-aviso">
            Para compras ou mais informações clique no nome do produto para
            iniciar uma conversa pelo Whatsapp.
          </p>

          {/* <!--------------------------------- apse  --> */}

          <div className="produto apse">
            <a href={require("../produtos/apse03.jpg")} target="_blank">
              <img src={require("../produtos/apse03.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Apse%20Cachos%20Shampoo"
                  target="_blank"
                >
                  Cachos Shampoo
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Apse%20Cachos%20Condicionador"
                  target="_blank"
                >
                  Cachos Condicionador
                </a>
              </p>
            </div>
          </div>

          <div className="produto apse">
            <a href={require("../produtos/apse05.jpg")} target="_blank">
              <img src={require("../produtos/apse05.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Apse%20Mousse%20Cachos"
                  target="_blank"
                >
                  Mousse Cachos
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Apse%20Mousse%20Crespo%20Power"
                  target="_blank"
                >
                  Mousse Crespo Power
                </a>
              </p>
            </div>
          </div>

          {/* <!----------------------------------- arvensis  --> */}

          <div className="produto arvensis">
            
            <a href={require("../produtos/arvensis01.jpg")} target="_blank">
              <img src={require("../produtos/arvensis01.jpg")} />
            </a>

            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Tec%20Oil%20Shampoo"
                  target="_blank"
                >
                  Tec Oil Shampoo
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Condicionador"
                  target="_blank"
                >
                  Condicionador
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Máscara"
                  target="_blank"
                >
                  Máscara
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Óleo%20Tec%20Oil"
                  target="_blank"
                >
                  Óleo Tec Oil
                </a>
              </p>
            </div>
          </div>

          <div className="produto arvensis">
            <a href={require("../produtos/arvensis02.jpg")} target="_blank">
              <img src={require("../produtos/arvensis02.jpg")} />
            </a>

            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Geleia%20ativadora%20Suave%20fixação%20250g"
                  target="_blank"
                >
                  Geleia ativadora Suave fixação 250g
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Geleia%20ativadora%20Alta%20fixação%20450g"
                  target="_blank"
                >
                  Geleia ativadora Alta fixação 450g
                </a>
              </p>
            </div>
          </div>

          <div className="produto arvensis">
            <a href={require("../produtos/arvensis03.jpg")} target="_blank">
              <img src={require("../produtos/arvensis03.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Reconstrução%20Shampoo"
                  target="_blank"
                >
                  Reconstrução Shampoo
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Reconstrução%20Condicionador"
                  target="_blank"
                >
                  Condicionador
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Reconstrução%20Máscara"
                  target="_blank"
                >
                  Máscara
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Reconstrução%20Desamareladora"
                  target="_blank"
                >
                  Desamareladora
                </a>
              </p>
            </div>
          </div>

          <div className="produto arvensis">
            <a href={("../produtos/arvensis05.jpg")} target="_blank">
              <img src={require("../produtos/arvensis05.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Shampoo"
                  target="_blank"
                >
                  Shampoo
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Condicionador"
                  target="_blank"
                >
                  Condicionador
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Arvensis%20Máscara"
                  target="_blank"
                >
                  Máscara
                </a>
              </p>
            </div>
          </div>

          
          {/* <!-------------------------------- MAGIC BEAUTY --> */}

          <div className="produto magic">
            <a href={require("../produtos/magic01.jpg")} target="_blank">
              <img src={require("../produtos/magic01.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Creme%20para%20pentear%20e%20ativador%20de%20cachos"
                    target="_blank"
                  >
                    Creme para pentear e ativador de cachos
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto magic">
            <a href={require("../produtos/magic02.jpg")} target="_blank">
              <img src={require("../produtos/magic02.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Umidificador%20de%20cachos"
                    target="_blank"
                  >
                    Umidificador de cachos
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto magic">
            <a href={require("../produtos/magic03.jpg")} target="_blank">
              <img src={require("../produtos/magic03.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Água%20de%20aloe"
                    target="_blank"
                  >
                    Água de aloe
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto magic">
            <a href={require("../produtos/magic04.jpg")} target="_blank">
              <img src={require("../produtos/magic04.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Gelatina%20modeladora"
                    target="_blank"
                  >
                    Gelatina modeladora
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto magic">
            <a href={require("../produtos/magic05.jpg")} target="_blank">
              <img src={require("../produtos/magic05.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Shampoo"
                    target="_blank"
                  >
                    Shampoo
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto magic">
            <a href={require("../produtos/magic06.jpg")} target="_blank">
              <img src={require("../produtos/magic06.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Magic%20Beauty%20-%20Condicionador"
                    target="_blank"
                  >
                    Condicionador
                  </a>
                </p>
              </div>
            </a>
          </div>

          {/* <!------------------------------------ widicare  --> */}

          <div className="produto widicare">
            <a href={require("../produtos/widi01.jpg")} target="_blank">
              <img src={require("../produtos/widi01.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Co%20Wash"
                    target="_blank"
                  >
                    Co Wash
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Shampoo"
                    target="_blank"
                  >
                    Shampoo
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Condicionador"
                    target="_blank"
                  >
                    Condicionador
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Máscara"
                    target="_blank"
                  >
                    Máscara
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto widicare">
            <a href={require("../produtos/widi02.jpg")} target="_blank">
              <img src={require("../produtos/widi02.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Máscara%20de%20Hidratação"
                    target="_blank"
                  >
                    Máscaras <br />
                    Hidratação
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Máscara%20de%20Nutrição"
                    target="_blank"
                  >
                    Nutrição
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Máscara%20de%20Reconstrução"
                    target="_blank"
                  >
                    Reconstrução
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto widicare">
            <a href={require("../produtos/widi03.jpg")} target="_blank">
              <img src={require("../produtos/widi03.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Modelador%20de%20Ondas"
                    target="_blank"
                  >
                    Modelador de Ondas
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Modelador%20de%20Cachos"
                    target="_blank"
                  >
                    Modelador de Cachos
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Modelador%20de%20Crespos"
                    target="_blank"
                  >
                    Modelador de Crespos
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto widicare">
            <a href={require("../produtos/widi04.jpg")} target="_blank">
              <img src={require("../produtos/widi04.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Phyto%20Manga%20Shampoo%20Reparador"
                    target="_blank"
                  >
                    Phyto Manga <br />
                    Shampoo Reparador
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Phyto%20Manga%20Condicionador%20Reparador"
                    target="_blank"
                  >
                    Condicionador Reparador
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Phyto%20Manga%20Finalizador"
                    target="_blank"
                  >
                    Finalizador
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Phyto%20Manga%20Máscara"
                    target="_blank"
                  >
                    Máscara
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto widicare">
            <a href={require("../produtos/widi05.jpg")} target="_blank">
              <img src={require("../produtos/widi05.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Sete%20Óleos%20Máscara%20Nutritiva"
                    target="_blank"
                  >
                    Sete Óleos Máscara Nutritiva
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto widicare">
            <a href={require("../produtos/widi06.jpg")} target="_blank">
              <img src={require("../produtos/widi06.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Mousse"
                    target="_blank"
                  >
                    Mousse
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Geléia"
                    target="_blank"
                  >
                    Geléia
                  </a>
                </p>
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Widi%20Care%20Revitalizador"
                    target="_blank"
                  >
                    Revitalizador
                  </a>
                </p>
              </div>
            </a>
          </div>

          {/* <!--------------------------------------- auri --> */}

          <div className="produto auri">
            <a href={require("../produtos/auri01.jpg")} target="_blank">
              <img src={require("../produtos/auri01.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Xampu"
                  target="_blank"
                >
                  Xampu
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Xampu%20Creme"
                  target="_blank"
                >
                  Xampu Creme
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Amaciador"
                  target="_blank"
                >
                  Amaciador
                </a>
              </p>
            </div>
          </div>

          <div className="produto auri">
            <a href={require("../produtos/auri02.jpg")} target="_blank">
              <img src={require("../produtos/auri02.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Gel"
                  target="_blank"
                >
                  Gel
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Gel%20Creme"
                  target="_blank"
                >
                  Gel Creme
                </a>
              </p>
            </div>
          </div>

          <div className="produto auri">
            <a href={require("../produtos/auri03.jpg")} target="_blank">
              <img src={require("../produtos/auri03.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Finalizador%20Leve"
                  target="_blank"
                >
                  Finalizador Leve
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Finalizador%20Denso"
                  target="_blank"
                >
                  Finalizador Denso
                </a>
              </p>
            </div>
          </div>

          <div className="produto auri">
            <a href={require("../produtos/auri04.jpg")} target="_blank">
              <img src={require("../produtos/auri04.jpg")} />
            </a>
            <div className="textoProduto">
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Acidificante"
                  target="_blank"
                >
                  Acidificante
                </a>
              </p>
              <p className="descricao">
                <a
                  href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Auri%20Máscara%20HNR"
                  target="_blank"
                >
                  Máscara HNR
                </a>
              </p>
            </div>
          </div>

          {/* <!------------------------------------ acessorios --> */}

          <div className="produto acessorios">
            <a href={require("../produtos/acessorios02.jpg")} target="_blank">
              <img src={require("../produtos/acessorios02.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Acessórios%20Espátula"
                    target="_blank"
                  >
                    Espátula
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto acessorios">
            <a href={require("../produtos/acessorios03.jpg")} target="_blank">
              <img src={require("../produtos/acessorios03.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Acessórios%20Difusor"
                    target="_blank"
                  >
                    Difusor
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto acessorios">
            <a href={require("../produtos/acessorios04.jpg")} target="_blank">
              <img src={require("../produtos/acessorios04.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Acessórios%20Touca%20difusora"
                    target="_blank"
                  >
                    Touca difusora
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto acessorios">
            <a href={require("../produtos/acessorios06.jpg")} target="_blank">
              <img src={require("../produtos/acessorios06.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Acessórios%20Xuxinha"
                    target="_blank"
                  >
                    Xuxinha
                  </a>
                </p>
              </div>
            </a>
          </div>

          <div className="produto acessorios">
            <a href={require("../produtos/acessorios10.jpg")} target="_blank">
              <img src={require("../produtos/acessorios10.jpg")} />
              <div className="textoProduto">
                <p className="descricao">
                  <a
                    href="http://wa.me/5551998497549?text=Site:%20Tenho%20interesse%20no%20produto%20Acessórios%20Borrifador"
                    target="_blank"
                  >
                    Borrifador
                  </a>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <a id="topo" href="#choose">
        <p>Topo</p>
      </a>
    </>
  );
}
