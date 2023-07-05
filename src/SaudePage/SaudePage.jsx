import "./SaudePage.css";
import ReactPlayer from 'react-player/youtube'

export default function SaudePage() {
  return (
    <main className="main">
      <div className="parte1">
        <a href="#tratamentos" className="tratamentos">
          Tratamentos
        </a>{" "}
        <br />
        <a href="#derma" className="tratamentos">
          Dermatites
        </a>{" "}
        <br />
      </div>
      {/* <!---------------------------------------TRATAMENTOS --> */}
      <div className="parte2">
        <p className="separador" id="um">
          Tratamentos
        </p>
        <br />
        <div class="bloquinho">
          <div class="esquerda">
            <strong>
              <u>Acidificação:</u>
            </strong>
            <br /> <br />
            <img
              className="img-acid"
              src={require("../imagens/widi-acid.jpg")}
              alt=""
            />
            <p>
              Tratamento que proporciona o equiblíbrio do ph dos fios.{" "}
              <i>"O ph do cabelo é ácido com valor entre 4 e 5".</i>
              <br />
              Alguns fatores externos podem aumentar o ph do cabelo, deixando os
              fios mais alcalinos e consequentemente poroso. <br />
              Processos químicos, como alisamentos, relaxamento, descoloração,
              cloro, poeira, sol e excesso de calor, são alguns dos fatores mais
              comuns que provocam o desequilíbrio do ph. <br />
              A acidificação equilibrar, e intensificar a absorção de nutrientes
              e vitaminas importantes para a saúde capilar. <br />
              Alinhando as cutículas capilares, deixando o cabelo com mais
              brilho, mais emoliente, e protegido contra agressões externas.{" "}
              <br />É indicado para todos os tipos de cabelo, independente da
              sua estrutura.
            </p>
          </div>
          <div className="direita">
            <p>
              <b>
                <u>Quando fazer?</u>
              </b>
              <p>
                {" "}
                <br />
                Cabelos com dificuldade de desembaraçar <br />
                Áspero <br />
                Falta de brilho <br />
                Rápida absorção de água (seca muito rápido) <br />
                Quebra <br />
                Afinamento <br /> <br />
                No salão a cada 30 dias (produto profissional). <br />
                Em casa a cada 15 dias (dependendo da necessidade do fio) <br />{" "}
                <br />
                <b>
                  Procure um profissional que entenda sobre do assunto, para
                  melhor te orientar.
                </b>{" "}
              </p>
              <br />
            </p>
          </div>
        </div>

        <div className="bloquinho">
          <div className="esquerda">
            <strong>
              <u>Hidronutrição:</u>
            </strong>{" "}
            <br />
            <div className="imgs-hidronutricao">
              <img
                src={require("../imagens/saude-nutrição.png")}
                alt=""
                class="image-hidro"
              />
              <img
                src={require("../imagens/saude-hidratação.png")}
                alt=""
                class="image-hidro"
              />
            </div>
            <p>
              Técnica de tratamento que une a hidratação e a nutrição,
              tornando-se um poderoso tratamento que auxilia muito quem tem
              cabelo seco, com mechas, coloração, e quimicamente tratado. <br />
              A hidratação devolve água, aminoácidos, e queratina. <br />
              A nutrição devolve lipídios. <br />
              É recomendado fazer uma vez na semana. <br />
            </p>
          </div>
          <div className="direita">
            <p>
              {" "}
              <br />
              <b>
                <u>Benefícios:</u>
              </b>
              <br />
            </p>
            <p>
              Brilho <br />
              Reduz o frizz <br />
              Fios mais fortes, sedosos, saudáveis
            </p>
            <br />
          </div>
        </div>

        <div className="bloquinho">
          <div className="esquerda">
            <strong>
              <u>Umectação:</u>
            </strong>
            <br />
            <img
              src={require("../imagens/saude-umectação.png")}
              alt=""
              class="image"
            />
            <p>
              É uma técnica de tratamento que serve para nutrir e fortalecer os
              fios, repondo a oleosidade necessária, que é perdida no dia a dia.
              É indicado para cabelos secos(porosos).
            </p>
          </div>
          <div className="direita">
            {" "}
            <br />
            <p>
              <b>
                <u>Benefícios:</u>
              </b>
            </p>
            <p>
              {" "}
              <br />
              Reduz a quebra <br />
              Diminui o frizz <br />
              Elimina os nós de fada <br />
              Combate o ressecamento e a porosidade <br />
              Toque mais suave <br />
              Mais brilho
            </p>
            <br />
          </div>
        </div>

        <div className="bloquinho">
          <div className="esquerda">
            <strong>
              <u>Ozonioterapia:</u>
            </strong>
            <br />
            <ReactPlayer className='video-ozonio' width='100%' url='https://www.youtube.com/shorts/I6d6mBW2emA' /><br />
            <p>
              Técnica de tratamento realizado com água e ozônio em forma de
              vapor. Esse penetra nos fios deixando- os mais hidratados, macios
              e encorpados. No coura cabeludo o vapor estimula a circulação
              sanguínea recuperando e tratando a saúde capilar. Indicado para
              todos os tipos de curvatura (cabelo).
            </p>
          </div>
          <div className="direita">
            <p>
              <b>
                <u>Benefícios:</u>
              </b>
            </p>
            <p>
              {" "}
              <br />
              Combate a calvície e a queda de cabelo
              <br />
              Combate a caspa e outras dermatites do couro cabeludo <br />
              Hidrata e recupera os fios <br />
              Alinha as cutículas <br />
              Rejuvenesce os fios <br />
              Estimula o crescimento <br />
              Diminui o frizz <br /> <br />
            </p>
          </div>
        </div>

        <div className="bloquinho">
          <div className="esquerda">
            <strong>
              <u>Reconstrução:</u>
            </strong>
            <br />
            <img
              src={require("../imagens/saude-reconstrução.png")}
              alt=""
              class="image"
            />
            <p>
              Consiste em repor massa capilar, que perdemos no dia a dia ,
              devido a exposição ao sol, químicas, temperaturas altas (chapinha,
              secador, babyliss), deixando mais poroso e quebradiço.
            </p>
          </div>
          <div className="direita">
            <p>
              <b>
                <u>Benefícios:</u>
              </b>
            </p>
            <p>
              {" "}
              <br />
              Todo cabelo vai precisar de reconstrução em algum momento. O que
              vária é a necessidade e frequência. Em cabelos naturais(virgens),
              o ideal é a cada 30 dias, já cabelos com química, mechas,
              coloração ou tinturas, a cada 15 ou 20 dias. Muita atenção!!!
              Reconstrução em excesso faz tão mal quanto não fazer. Então
              cuidado com o tempo de intervalo entre um tratamento e outro.
            </p>
            <br />
          </div>
        </div>

        {/* <!------------------------ DERMATITES  ----------------------------> */}
        <br />
        <p className="separador" id="derma">
          Dermatites
        </p>

        <div id="dois" className="dermatites">
          <h3 className="subtitulo">ALOPÉCIA POR TRAÇÃO</h3>
          <div className="container">
            <img
              className="imagem-alo"
              src={require("../imagens/alopecia1.png")}
            />

            <div className="centralizado">
              <h4 className="st">O que é ?</h4>
              <p className="texto">
                Alopécia por tração é a perda de cabelo causada pela tração dos
                fios. Um dos maiores sintomas do problema é a formação de
                algumas falhas no couro cabeludo, principalmente na região das
                têmporas, nas áreas da franja, nuca e também atrás das orelhas.{" "}
              </p>{" "}
              <br />
              <details>
                {" "}
                <summary> mais </summary>
                <h4 className="st">Como acontece a alopecia por tração?</h4>
                <p className="texto">
                  A alopecia é uma condição que leva à perda de cabelo. O
                  problema pode ser causado pela genética, mas outro fator que o
                  desencadeia é a tração feita nos fios - seja pelo uso
                  constante de penteados repuxados ou até pelo hábito de
                  arrancar as madeixas devido a problemas emocionais, como o
                  estresse, a depressão e a ansiedade. O problema costuma
                  provocar grandes falhas na região, deixando o couro cabeludo à
                  mostra.{" "}
                </p>
                <br />
                <h4 className="st">
                  Penteados apertados é o uso de megahair podem causar a
                  alopecia por tração?
                </h4>
                <p className="texto">
                  É verdade. A alopecia de tração está ligada à tração
                  prolongada dos fios e à tensão do couro cabeludo com esse
                  movimento. Sendo assim, aqueles penteados que são muito
                  repuxados podem acabar gerando o problema. As falhas no cabelo
                  acontecem devido à falta de elasticidade das fibras dos
                  folículos pilosos, o que resulta no rompimento dos fios. O
                  mesmo vale para as pessoas que colocam tranças, megahair ou
                  passam longos períodos com as madeixas presas.{" "}
                </p>
                <h4 className="st">Como podemos tratar o problema?</h4>
                <p className="texto">
                  Em primeiro lugar, é importante diagnosticar a alopecia de
                  tração o mais cedo possível. Quando não conseguimos
                  identificar o problema, a cicatrização dos folículos impede
                  que novos fios cresçam e acaba enfraquecendo aqueles que ainda
                  estão ali. O cenário pode piorar a queda de cabelo e deixar
                  falhas no couro cabeludo ainda maiores. Para tratar o
                  problema, é importante deixar que os fios relaxem e fiquem
                  livres de qualquer tensão. Se o caso for mais grave e a doença
                  estiver em um estágio avançado, procure um dermatologista ou
                  terapeuta capilar.{" "}
                </p>
              </details>
            </div>
          </div>

          <h3 className="subtitulo">PSORÍASE</h3>
          <div className="container">
            <img
              className="imagem-alo direita"
              src={require("../imagens/psoriase.jpg")}
            />
            <p className="texto">
              A psoríase é uma doença crônica que atinge não apenas o couro
              cabeludo, mas também cotovelos e joelhos, entre outras partes do
              corpo. Sua causa está ligada à hereditariedade e ao sistema
              imunológico. Quando a psoríase se manifesta, ocorre a formação de
              placas avermelhadas, que descascam, de contornos bem definidos. Ao
              contrário do que algumas pessoas imaginam, a doença não é
              contagiosa.
            </p>
            <br />
          </div>

          <h3 className="subtitulo">FOLICULITE</h3>
          <div className="container">
            <img
              className="imagem-alo esquerda"
              src={require("../imagens/foliculite.jpg")}
            />
            <p className="texto">
              A relação das doenças do couro cabeludo inclui a foliculite, uma
              inflamação nos folículos pilosos cujos principais sintomas são
              pele avermelhada, coceira e pequenas bolhas de pus. Em geral, a
              foliculite é causada pela bactéria Staphylococcus aureus
              (estafilococos), mas ela também pode ser de origem viral ou
              fúngica. A doença atinge todas as partes do corpo, exceto mucosas,
              palmas das mãos e plantas dos pés.
            </p>{" "}
            <br />
          </div>

          <h3 className="subtitulo">DERMATITE SEBORRÉICA</h3>
          <div className="container">
            <img
              className="imagem-alo direita"
              src={require("../imagens/dermatite-seborreica.jpg")}
            />
            <p className="texto">
              A dermatite seborreica ou seborreia é mais conhecida como caspa.
              Ela surge devido à mudança na produção de sebo pelas glândulas
              sebáceas, o que eleva a oleosidade do couro cabeludo. Por isso, a
              região atingida fica avermelhada, em placas ou crostas, e muitas
              vezes há coceira e descamação. O desequilíbrio na produção de
              classes de bactérias e fungos também causa a dermatite seborreica.
            </p>
          </div>

          <h3 className="subtitulo">PITIRÍASE</h3>
          <div className="container">
            <img
              className="imagem-alo esquerda"
              src={require("../imagens/Pitiríase.jpg")}
            />
            <p className="texto">
              A lista de doenças do couro cabeludo engloba a pitiríase, uma
              micose de origem fúngica. Chamada também de tínea capilar, esse
              tipo de infecção causa coceira e descamação, além de queda
              temporária do cabelo, em alguns casos. Os fungos causadores da
              pitiríase compõem a microbiota do couro cabeludo e são ativados
              devido a mudanças no pH da região, à sudorese em excesso e até
              mesmo ao estresse, entre outras razões.
            </p>
          </div>
          <a className="topo" href="#um">
            TOPO
          </a>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
