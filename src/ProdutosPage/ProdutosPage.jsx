import { useState } from "react";
import "./ProdutosPage.css";
import ProdutoDesc from "./ProdutoDesc";

export default function ProdutosPage() {
  // const [filtro, setFiltro] = useState("");

  // var divProduto = document.querySelectorAll(".produto");
  // var qtdDivs = divProduto.length - 1;
  // var vMarcas = document.querySelectorAll(".marca");
  // var qtdMarcas = vMarcas.length - 1;

  // for (let i = 0; i <= qtdDivs; i++) {
  //   if (divProduto[i].className.indexOf(filtro) != -1) {
  //     divProduto[i].classList.remove("hide");
  //   } else {
  //     divProduto[i].classList.add("hide");
  //   }
  // }
  // for (let i = 0; i <= qtdMarcas; i++) {
  //   if (
  //     vMarcas[i].id.indexOf(filtro) != -1 ||
  //     vMarcas[i].id.indexOf("todos") != -1
  //   ) {
  //     vMarcas[i].classList.remove("hide");
  //     console.log(
  //       "remove hide : " +
  //         vMarcas[i].getAttribute("class") +
  //         vMarcas[i].getAttribute("id")
  //     );
  //   } else {
  //     vMarcas[i].classList.add("hide");
  //     console.log(
  //       "add hide : " +
  //         vMarcas[i].getAttribute("class") +
  //         vMarcas[i].getAttribute("id")
  //     );
  //   }
  // }

  return (
    <>
      <div className="produtos_container">
        <h3>Mais informações sobre os produtos, clique no ícone do Whattsapp.</h3>
        <ProdutoDesc
          xref={"../produtos/apse01.jpeg"}
          title={"Apse Mousse Nutritivo"}
          tags={["ANTIFRIZ", "DEFINIÇÃO", "PROTEÇÃO TÉRMICA", "VOLUME"]}
          text={
            "Chegou a solução para o frizz e definição mais duradoura dos seus cachos, com o volume que você ama! Hidrata e defini de     forma mais duradoura. Produto com proteção térmica. Cabelos    hidratados e nutridos e a nova solução para o seu day after."
          }
        />

        <ProdutoDesc
          xref={"../produtos/apse02.jpeg"}
          title={"Apse Gelatina Ativadora"}
          tags={["ANTIFRIZ", "DEFINIÇÃO", "FIXAÇÃO", "DAYAFTER"]}
          text={
            "Indispensável para quem gosta de definição! Super versátil, pode ser usado nos fios secos ou molhados – misturando ao ativador de cachos ou sozinho. Liberado para Low Poo e No poo Uso diário – Sem enxágue – Não deixa resíduo! Para cabelos cacheados, ondulados, crespos ou em transição capilar pH 3,0 a 4,0 aproximadamente."
          }
        />

        <ProdutoDesc
          xref={"../produtos/apse03.jpeg"}
          title={"Apse Ativador e Modelador"}
          tags={["ANTIFRIZ", "DEFINIÇÃO", "FIXAÇÃO", "BRILHO"]}
          text={
            "Cachos definidos, controlados e sem frizz. Hidrata e desenvolve o movimento natural dos cabelos. Uso diário – Sem enxágue – Não deixa resíduo! Para cabelos ondulados, cacheados, crespos e em transição! pH 3,0 a 4,0 aproximadamente."
          }
        />

        <ProdutoDesc
          xref={"../produtos/widi01.jpg"}
          title={"Condicionador Juba "}
          tags={["HIDRATANTE", "DESEMBARAÇA", "MACIEZ", "BRILHO"]}
          text={
            "Cuidar e tratar a Juba nunca foi tão fácil! O Condicionando a Juba é um condicionador hidro-nutritivo que promove alta emoliência aos fios ondulados, cacheados e crespos! Sua incrível fórmula proporciona desembaraço, maciez e brilho aos fios! Com ativos hidratantes e nutritivos, sua inteligente composição possui poder 2 em 1, hidrata e nutre toda a fibra, em uma única aplicaçãO."
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi02.jpg"}
          title={"Shampoo Juba"}
          tags={["LIMPEZA", "BRILHO", "HIDRATAÇÃO", "DESEMBARAÇA"]}
          text={
            "Essa história que shampoo resseca e embola cabelo ondulado, cacheado e crespo é coisa do passado! O Higienizando a Juba é um shampoo com tecnologia única, afinal, ele tem o poder de limpar, fazer espuma e não embolar. O único shampoo que foi feito pensado especialmente nas curvaturas. Com sua espuma super cremosa, você já sente sua Juba hidratada e nutrida desde a primeira aplicação!"
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi03.jpg"}
          title={"Potencializador Juba"}
          tags={["PROTEÇÃO TÉRMICA", "DEFINIÇÃO", "FIXAÇÃO", "BRILHO", "FINALIZADOR"]}
          text={
            "Potencializando a Juba Gommage Texturizadora é um finalizador para definição de cabelos crespos, com proteção térmica e ação doadora de brilho. Indicado para a rotina de finalização dos fios, com segurança na ativação dos crespos. Com óleo de linhaça, extrato de avelã e colágeno vegetal, preserva a camada cuticular do cabelo, aumenta a elasticidade e forma um filme, evitando o ressecamento e contribuindo para o controle do fator encolhimento."
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi04.jpg"}
          title={"Máscara Phyto Manga"}
          tags={["NUTRIÇÃO", "CHEIROSA","CONDICIONA","SAUDÁVEL"]}
          text={
            "A máscara ultra nutritiva Phyto Manga, além de ser a nutrição mais cheirosa que você vai usar na vida, possui um poder super nutritivo! Em sua composição encontra-se a manteiga vegetal de manga, que é nutritiva e umectante e o extrato de pitanga, ótimo agente hidratante, que deixa seus fios mais saudáveis e emolientes. Indicada para todos os tipos de cabelos.."
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi05.jpg"}
          title={"Máscara Reconstrutora"}
          tags={["DANIFICADOS", "REGENERAÇÃO", "RECONSTRUÇÃO", "BRILHO"]}
          text={
            "Tratamento desenvolvido para cabelos danificados por ações químicas. É um tratamento intensivo de reposição de proteínas e de reconstrução celular. Devolve a massa capilar, dando consistência e a força necessária para vitalidade dos fios."
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi06.jpg"}
          title={"Máscara Hidratante"}
          tags={["HIDRATAÇÃO", "ALINHAMENTO", "BRILHO","ANTIFRIZ"]}
          text={
            "A Máscara Hidratante Pérolas de Caviar de Widi Care é um tratamento com fórmula enriquecida para devolver a umidade natural dos fios. Pois proporciona revitalização, maleabilidade, brilho e força. Indicado para cabelos desidratados, sem brilho e danificados. Tratamento hidratante de reposição hídrica natural dos fios."
          }
        />
        <ProdutoDesc
          xref={"../produtos/widi07.jpg"}
          title={"Óleo Arganoil"}
          tags={["PERFUMADO", "ABSORÇÃO", "PROTEÇÃO TÉRMICA", "BRILHO"]}
          text={
            "Argan Oil é um óleo finalizador hidratante que tem uma fórmula leve, de alto desempenho e rápida absorção. Mantém os cabelos alinhados, controlando o frizz. Sua base na formulação é Óleo de Argan que possui alto teor hidratante que atinge profundamente o fio, proporcionando brilho intenso e maciez. Restaura pontas duplas, protege os cabelos contra o calor do secador e da chapinha."
          }
        />
        <ProdutoDesc
          xref={"../produtos/acessorios01.jpg"}
          title={"Espátulas"}
          tags={["ACESSÓRIOS"]}
          text={
            "Nossas mãos tem naturalmente, bactérias e fungos, e nas unhas estão acumuladas o maior reservatório de bactérias, essas ao entrarem em contato com o produto se proliferam com grande facilidade e acabam oxidando a máscara, desta forma ela perde o efeito nos cabelos."
          }
        />

        <a
          href="https://api.whatsapp.com/send/?phone=5551998497549&text=Ol%C3%A1%21+Vim+direcionada+do+site+e+tenho+interesse+nos+produtos.&type=phone_number&app_absent=0"
          target="blank"
        >
          <img id="produto_whatts" src={"./img/logo-whatsapp-color.png"} alt="" />
        </a>
      </div>
    </>
  );
}
