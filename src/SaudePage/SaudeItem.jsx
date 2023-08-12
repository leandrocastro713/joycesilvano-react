import { BsCheckLg } from "react-icons/bs";
import "./SaudePage.css";
import ReactPlayer from "react-player/youtube";

export default function SaudeItem(props) {
  return (
    <>
      <h2
        className="saude_sub_title"
        style={{
          margin: props.shVar ? "0 auto" : "0 0 -4px",
          zIndex: props.zIndex,
        }}
        onClick={() => props.shFunction(!props.shVar)}
      >
        {props.title}
        {console.log(props.shVar)}
      </h2>

      <div
        className="saude_block"
        style={{
          height: props.shVar ? "auto" : "0px",
        }}
      >
        {props.video && props.shVar && (
          <div
            style={{
              transition: "all 300ms ease",
              display: "block",
              left: props.shVar ? "-100vw" : "0vw",
              opacity: props.shVar ? "1" : "0",
            }}
          >
            <ReactPlayer
              className="saude_video"
              width="100%"
              url={props.video}
            />
          </div>
        )}

        {props.image && (
          <img
            style={{
              transition: "all 400ms ease",
              left: props.shVar ? "0vw" : "-100vw",
            }}
            className="saude_image"
            src={props.image}
          />
        )}

        {props.imageDerma && (
          <img
            style={{
              transition: "all 400ms ease",
              left: props.shVar ? "0vw" : "-100vw",
            }}
            className="saude_image_derma"
            src={props.imageDerma}
          />
        )}

        {props.description &&
          props.description.map((desc) => (
            <p
              style={{
                transition: "all 700ms ease",
                left: props.shVar ? "0vw" : "100vw",
              }}
              className="saude_text"
            >
              {" "}
              {desc}{" "}
            </p>
          ))}

        {props.extras &&
          props.extras.map((ex) => (
            <div
              style={{
                transition: "1000ms all ease",
                position: "relative",
                display: "block",
                alignItems: "center",
                left: props.shVar ? "0px" : "-100vw",
              }}
            >
              <div className="check_icon_container">
                <BsCheckLg className="check_icon" />
              </div>
              <p className="saude_text"> {ex} </p>
            </div>
          ))}
      </div>
    </>
  );
}
