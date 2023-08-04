import DicasItem from "./DicasItem";
import "./DicasPage.css";
import ReactPlayer from "react-player/youtube";

export default function DicasPage() {
  return (
    <main>
      <DicasItem
        title={"Shampoo + Co Wash"}
        description={
          "Para quem higieniza os cabelos todos os dias, deve-se intercalar o shampoo com o co wash!"
        }
      />
      <DicasItem
        title={"Cetim"}
        description={
          "Dormir com fronha ou touca de cetim, ajuda a manter a oleosidade natural dos cabelos, evita embaraçar, e evita o frizz."
        }
      />
      <DicasItem
        title={"Durinho de gel"}
        video={"https://www.youtube.com/shorts/M9WQJ8rIL7A"}
        description={
          "O que fazer quando seu cabelo ficar com aquele durinho de gel? Coloque 3 gotinhas de óleo na palma da mão (esfregue as mãos) e amasse o seu cabelo!"
        }
      />
      <DicasItem
        title={"Day After"}
        description={
          "Sabe quando você acorda e sua finalização não está do seu agrado? Você pode revitalizar seus cachos com um spray Day After. Separe o cabelo em mechas como se fosse finalizar, borrife o spray em cada mecha, enluve bem e amasse(se quiser definição, faça a fitagem novamente) mas cuidado com o excesso de produto."
        }
      />
      <DicasItem
        title={"Tempo de corte"}
        video={'https://www.youtube.com/shorts/NHrpsiUFNnk'}
        description={"Eu recomento, para cabelos mais curtos, com um cacho mais aberto, ou ondulado, um corte a cada 3 ou 4 meses e para cabelos longos, em até 6 meses. Mas atenção! Nunca deixe o corte passar de um ano pois as pontas afinam e danificam, fazendo com que seja nescessário uma retirada maior no comprimento."}
      />
    </main>
  );
}
