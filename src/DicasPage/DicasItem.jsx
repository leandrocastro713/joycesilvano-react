import ReactPlayer from "react-player/youtube";

export default function DicasItem({ title, description, video }) {
  return (
    <div className="dica">
      <h2>{title}</h2>
      {video && (
        <ReactPlayer height= '470px' className="video_durinho" width="100%" url={video} />
      )}
      <p>{description}</p>
    </div>
  );
}
