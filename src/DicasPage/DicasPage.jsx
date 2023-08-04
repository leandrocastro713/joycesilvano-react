import "./DicasPage.css"
import ReactPlayer from 'react-player/youtube'



export default function DicasPage() {
  return (
    <main>
      <div className="dica">
        <h2>Shampoo + Co Wash</h2>
        <p>
          Para quem higieniza os cabelos todos os dias, deve-se intercalar o
          shampoo com o co wash!
        </p>
      </div>
      <div className="dica">
        <h2>Cetim</h2>
        <p>
          Dormir com fronha ou touca de cetim, ajuda a manter a oleosidade
          natural dos cabelos, evita embaraçar, e evita o frizz.
        </p>
      </div>
      <div className="dica">
        <h2>Durinho de gel</h2>
        <ReactPlayer className='video_durinho' width='100%' url='https://www.youtube.com/shorts/M9WQJ8rIL7A' /><br />
         
        <p>
          O que fazer quando seu cabelo ficar com aquele durinho de gel? Coloque
          3 gotinhas de óleo na palma da mão (esfregue as mãos) e amasse o seu
          cabelo!
        </p>
      </div>
      <div className="dica">
        <h2>Day After</h2>
        <p>
          Sabe quando você acorda e sua finalização não está do seu agrado? Você
          pode revitalizar seus cachos com um spray Day After. <br />
          Separe o cabelo em mechas como se fosse finalizar, borrife o spray em
          cada mecha, enluve bem e amasse(se quiser definição, faça a fitagem
          novamente) mas cuidado com o excesso de produto.
        </p>
      </div>
    </main>
  );
}
