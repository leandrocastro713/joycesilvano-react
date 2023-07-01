import "./ContatoPage.css"

export default function ContatoPage() {
  return (
    <>
      <div className="grid">
        <div className="principal">
          <div className="facebook">
            <a
              href="https://www.facebook.com/Joyce-Silvano-cabelos-reais-111105454080975/"
              target="_blank"
            >
              <span>Facebook</span>
              <img src={require('../imagens/banner-facebook.png')} />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/joycesilvanocabeloslivres/"
              target="_blank"
            >
              <span>Instagram</span>
              <img src={require("../imagens/banner-instagram.png")} />
            </a>
          </div>
          <div className="whatsapp">
            <a
              href="https://wa.me/5551998497549?text=Olá!%20Vim%20direcionada%20do%20site e%20gostaria%20de%20fazer%20um%20orçamento."
              target="_blank"
            >
              <span>Whatsapp</span>
              <img src={require("../imagens/banner-whatsapp.png")} />
            </a>
          </div>
        </div>

        {/* <!----------------------------------------- sidebar  --> */}

        <div className="sidebar">
          <p className="quem">Quem sou eu?</p>
          <video
            height="582px"
            controls
            src={require("../video-apresentacao.mp4")}
            poster={require("../imagens/poster-video.jpg")}
          ></video>
          <a
            id="canal"
            href="https://www.youtube.com/channel/UCwdqLawDA80REm8e68YkVqA/videos"
            target="_blank"
          >
            <img src={require("../imagens//youtube-logo.png")} alt="youtube-logo" />
            Visite meu canal no Youtube
          </a>
        </div>
      </div>
    </>
  )
}
