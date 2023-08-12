import "./ContatoPage.css";
import ReactPlayer from "react-player/youtube";

export default function ContatoPage() {
  return (
    <>
      <div className="contatos_grid">
        <div className="contatos_container">
          <div className="facebook">
            <a
              href="https://www.facebook.com/Joyce-Silvano-cabelos-reais-111105454080975/"
              target="_blank"
            >
              <span>Facebook</span>
              <img src="./img/banner-facebook.png" />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/joycesilvanocabeloslivres/"
              target="_blank"
            >
              <span>Instagram</span>
              <img src='./img/banner-instagram.png' />
            </a>
          </div>
          <div className="whatsapp">
            <a
              href="https://wa.me/5551998497549?text=Olá!%20Vim%20direcionada%20do%20site e%20gostaria%20de%20fazer%20um%20orçamento."
              target="_blank"
            >
              <span>Whatsapp</span>
              <img src="./img/banner-whatsapp.png" />
            </a>
          </div>
        </div>

        {/* <!----------------------------------------- sidebar  --> */}

        <div className="contatos_sidebar">
          <p className="contatos_quem">Quem sou eu?</p>
          <ReactPlayer
            className="contatos_video"
            width="400px"
            url="https://www.youtube.com/shorts/vnJAeBG3Ly8"
          />
          <a
            id="canal"
            href="https://www.youtube.com/channel/UCBflT4U-trl4CUdJfC6xKnQ"
            target="_blank"
          >
            <img
              src="./img/youtube-logo.png"
              alt="youtube-logo"
            />
            Visite meu canal no Youtube
          </a>

          <div className="contato_map">
            <p>Onde me encontrar?</p>
            <iframe className='contato_map_frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.219158681594!2d-51.196159524295624!3d-30.059251874916125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519780e3ec8828b%3A0xe5536dedb23aa3de!2zU2vDqW5kYWw!5e0!3m2!1spt-BR!2sbr!4v1688824468724!5m2!1spt-BR!2sbr"></iframe>

            {/* width="400px" height="400px" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}

          </div>

        </div>
      </div>
    </>
  );
}
