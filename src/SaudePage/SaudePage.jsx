import "./SaudePage.css";
import SaudeItem from "./SaudeItem";
import { useState, useEffect } from "react";

export default function SaudePage() {
  const [shAcid, setShAcid] = useState(false);
  const [shHidro, setShHidro] = useState(false);
  const [shUmec, setShUmec] = useState(false);
  const [shOzonio, setShOzonio] = useState(false);
  const [shRecons, setShRecons] = useState(false);
  const [expandTratamentos, setExpandTratamentos] = useState(false);
  const [expandDermatites, setExpandDermatites] = useState(false);
  const [shAlopecia, setShAlopecia] = useState(false);
  const [shPsoriase, setShPsoriase] = useState(false);
  const [shFoliculite, setShFoliculite] = useState(false);
  const [shSeborreica, setShSeborreica] = useState(false);
  const [shPitiriase, setShPitiriase] = useState(false);

  return (
    <main className="saude_container">
      <h2 class='title1'>Tratamentos e Dermatites</h2> <br />
      <p className="saudeTextUp">
        Para cuidar do couro cabeludo, é importante seguir algumas
        precauções e tratamentos específicos. Aqui estão algumns tratamentos e
        explicações para ajudar a lidar com algumas dermatites capilares e
        cuidados com os cabelos.
      </p>

      <div
        className="tratamentosContainer"
        style={{
          display: "block",
          overflow: "hidden",
          height: expandTratamentos ? "auto" : "80px",
        }}
      >
        <div className="divTitle">
          <h2
            className="title"
            onClick={() => {
              setExpandTratamentos(!expandTratamentos);
              setExpandDermatites(false);
            }}
          >
            Tratamentos
          </h2>
        </div>

        <SaudeItem
          title="Acidificação"
          image={"./img/widi-acid.jpg"}
          shFunction={setShAcid}
          shVar={shAcid}
          description={[
            "Tratamento que proporciona o equiblíbrio do ph dos fios.",
            "O ph do cabelo é ácido com valor entre 4 e 5",
            "Alguns fatores externos podem aumentar o ph do cabelo, deixando os  fios mais alcalinos e consequentemente poroso.",
            "Processos químicos, como alisamentos, relaxamento, descoloração,   cloro, poeira, sol e excesso de calor, são alguns dos fatores mais  comuns que provocam o desequilíbrio do ph.",
            "A acidificação equilibrar, e intensificar a absorção de nutrientes  e vitaminas importantes para a saúde capilar.",
            "Alinhando as cutículas capilares, deixando o cabelo com mais brilho, mais emoliente, e protegido contra agressões externas.",
            "É indicado para todos os tipos de cabelo, independente da sua estrutura.",
            "Quando fazer ?",
          ]}
          extras={[
            "Cabelos com dificuldade de desembaraçar",
            "Áspero",
            "Falta de brilho",
            "Rápida absorção de água (seca muito rápido",
            "Quebra",
            "Afinamento",
            "No salão a cada 30 dias (produto profissional)",
            "Em casa a cada 15 dias (dependendo da necessidade do fio)",
          ]}
        />

        <SaudeItem
          title={"Hidronutrição"}
          image={"./img/saude-nutrição.png"}
          shVar={shHidro}
          shFunction={setShHidro}
          description={[
            "Técnica de tratamento que une a hidratação e a nutrição, tornando-se um poderoso tratamento que auxilia muito quem tem cabelo seco, com mechas, coloração, e quimicamente tratado.",
            "A hidratação devolve água, aminoácidos, e queratina.",
            "A nutrição devolve lipídios.",
            "É recomendado fazer uma vez na semana.",
            "Benefícios:",
          ]}
          extras={[
            "Brilho",
            "Reduz o frizz",
            "Fios mais fortes, sedosos, saudáveis",
          ]}
        />

        <SaudeItem
          title={"Umectação"}
          image={"./img/saude-umectação.png"}
          shVar={shUmec}
          shFunction={setShUmec}
          description={[
            "É uma técnica de tratamento que serve para nutrir e fortalecer os fios, repondo a oleosidade necessária, que é perdida no dia a dia.",
            "É indicado para cabelos secos(porosos).",
            "Benefícios:",
          ]}
          extras={[
            "Reduz a quebra",
            "Diminui o frizz",
            "Elimina os nós de fada",
            "Combate o ressecamento e a porosidade",
            "Toque mais suave",
            "Mais brilho",
          ]}
        />

        <SaudeItem
          title={"Ozonioterapia"}
          shVar={shOzonio}
          shFunction={setShOzonio}
          video={"https://www.youtube.com/shorts/I6d6mBW2emA"}
          description={[
            "Técnica de tratamento realizado com água e ozônio em forma de   vapor. Esse penetra nos fios deixando- os mais hidratados, macios e encorpados.",
            "No couro cabeludo o vapor estimula a circulação sanguínea recuperando e tratando a saúde capilar. Indicado para todos os tipos de curvatura (cabelo).",
            "Benefícios:",
          ]}
          extras={[
            "Combate a calvície e a queda de cabelo",
            "Combate a caspa e outras dermatites do couro cabeludo",
            "Hidrata e recupera os fios",
            "Alinha as cutículas",
            "Rejuvenesce os fios",
            "Estimula o crescimento",
            "Diminui o frizz",
          ]}
        />

        <SaudeItem
          title={"Reconstrução"}
          shVar={shRecons}
          shFunction={setShRecons}
          image={"./img/saude-reconstrução.png"}
          description={[
            "Consiste em repor massa capilar, que perdemos no dia a dia, devido a exposição ao sol, químicas, temperaturas altas (chapinha, secador, babyliss), deixando mais poroso e quebradiço.",
            "Quando fazer:",
          ]}
          extras={[
            "Todo cabelo vai precisar de reconstrução em algum momento. O que vária é a necessidade e frequência.",
            "Em cabelos naturais(virgens), o ideal é a cada 30 dias, já cabelos com química, mechas, coloração ou tinturas, a cada 15 ou 20 dias.",
            "Muita atenção!!! Reconstrução em excesso faz tão mal quanto não fazer. Então cuidado com o tempo de intervalo entre um tratamento e outro.",
          ]}
          zindex={"1000"}
        />
      </div>

      {/* ------------------------  DERMATITES CONTAINER  */}

      <div
        className="dermatitesContainer"
        style={{
          display: "block",
          overflow: "hidden",
          height: expandDermatites ? "auto" : "80px",
        }}
      >
        <div className="divTitle">
          <h2
            className="title"
            onClick={() => {
              setExpandDermatites(!expandDermatites);
              setExpandTratamentos(false);
            }}
          >
            Dermatites
          </h2>
        </div>

        <SaudeItem
          title={"Alopécia por tração"}
          shVar={shAlopecia}
          shFunction={setShAlopecia}
          imageDerma={"./img/alopecia1.png"}
          description={[
            "Alopécia por tração é a perda de cabelo causada pela tração dos fios. Um dos maiores sintomas do problema é a formação de algumas falhas no couro cabeludo, principalmente na região das  têmporas, nas áreas da franja, nuca e também atrás das orelhas.",
            "Como acontece a alopecia por tração?",
            "A alopecia é uma condição que leva à perda de cabelo. O problema pode ser causado pela genética, mas outro fator que o  desencadeia é a tração feita nos fios - seja pelo uso          constante de penteados repuxados ou até pelo hábito de arrancar as madeixas devido a problemas emocionais, como o            estresse, a depressão e a ansiedade. O problema costuma provocar grandes falhas na região, deixando o couro cabeludo à mostra.",
            "Penteados apertados é o uso de megahair podem causar a alopecia por tração?",
            "É verdade. A alopecia de tração está ligada à tração           prolongada dos fios e à tensão do couro cabeludo com esse movimento. Sendo assim, aqueles penteados que são muito repuxados podem acabar gerando o problema. As falhas no cabelo acontecem devido à falta de elasticidade das fibras dos folículos pilosos, o que resulta no rompimento dos fios. O mesmo vale para as pessoas que colocam tranças, megahair ou passam longos períodos com as madeixas presas.",
            "Como podemos tratar o problema?",
            "Em primeiro lugar, é importante diagnosticar a alopecia de tração o mais cedo possível. Quando não conseguimos identificar o problema, a cicatrização dos folículos impede que novos fios cresçam e acaba enfraquecendo aqueles que ainda estão ali. O cenário pode piorar a queda de cabelo e deixar falhas no couro cabeludo ainda maiores. Para tratar oproblema, é importante deixar que os fios relaxem e fiquem livres de qualquer tensão. Se o caso for mais grave e a doença estiver em um estágio avançado, procure um dermatologista ou terapeuta capilar.",
            "A psoríase é uma doença crônica que atinge não apenas o couro cabeludo, mas também cotovelos e joelhos, entre outras partes do corpo. Sua causa está ligada à hereditariedade e ao sistema imunológico. Quando a psoríase se manifesta, ocorre a formação de placas avermelhadas, que descascam, de contornos bem definidos. Ao contrário do que algumas pessoas imaginam, a doença não é contagiosa.",
          ]}
          zindex={"1000"}
        />

        <SaudeItem
          title={"Psoríase"}
          shVar={shPsoriase}
          shFunction={setShPsoriase}
          imageDerma={"./img/psoriase.jpg"}
          description={[
            "A psoríase é uma doença crônica da pele, não contagiosa, caracterizada pela presença de manchas róseas ou avermelhadas, recobertas por escamas esbranquiçadas. Sua causa é ainda desconhecida e embora exista uma predisposição familiar, não é necessariamente transmitida aos descendentes. Atinge homens e mulheres, em qualquer idade, podendo ocorrer desde formas localizadas e discretas, até formas muito severas acometendo grande área da superfície corporal.",
            "A psoríase está sujeita a melhoras dos sintomas e a recaídas, relacionadas a diversos fatores: traumas (físico, químico, queimadura solar), infecções, drogas, estresse emocional, etc. Os locais mais atingidos são o couro cabeludo, cotovelos, joelhos, palmas das mãos, plantas dos pés, unhas e tronco, com lesões em ambos os lados do corpo.",
          ]}
        />

        <SaudeItem
          title={"Foliculite"}
          shVar={shFoliculite}
          shFunction={setShFoliculite}
          imageDerma={"./img/foliculite.jpg"}
          description={[
            "A relação das doenças do couro cabeludo inclui a foliculite, uma inflamação nos folículos pilosos cujos principais sintomas são pele avermelhada, coceira e pequenas bolhas de pus. Em geral, a foliculite é causada pela bactéria Staphylococcus aureus(estafilococos), mas ela também pode ser de origem viral ou úngica.A doença atinge todas as partes do corpo, exceto mucosas, palmas das mãos e plantas dos pés.",
          ]}
        />

        <SaudeItem
          title={"Dermatite Seborréica"}
          shVar={shSeborreica}
          shFunction={setShSeborreica}
          imageDerma={"./img/dermatite-seborreica.jpg"}
          description={[
            "A dermatite seborreica ou seborreia é mais conhecida como caspa. Ela surge devido à mudança na produção de sebo pelas glândulas sebáceas, o que eleva a oleosidade do couro cabeludo. Por isso, a região atingida fica avermelhada, em placas ou crostas, e muitas vezes há coceira e descamação. O desequilíbrio na produção de classes de bactérias e fungos também causa a dermatite seborreica.",
          ]}
        />

        <SaudeItem
          title={"Pitiríase"}
          shVar={shPitiriase}
          shFunction={setShPitiriase}
          imageDerma={"./img/pitiriase2.jpg"}
          description={[
            "A lista de doenças do couro cabeludo engloba a pitiríase, uma micose de origem fúngica. Chamada também de tínea capilar, esse tipo de infecção causa coceira e descamação, além de queda temporária do cabelo, em alguns casos. Os fungos causadores da pitiríase compõem a microbiota do couro cabeludo e são ativados devido a mudanças no pH da região, à sudorese em excesso e até mesmo ao estresse, entre outras razões.",
          ]}
        />
      </div>

      <p className="saudeTextUp mg-top">
        Lembrando que essas são apenas algumas dicas gerais, e é importante consultar um dermatologista para um tratamento adequado e individualizado para a sua condição de dermatite no couro cabeludo.
      </p>

    </main>
  );
}
