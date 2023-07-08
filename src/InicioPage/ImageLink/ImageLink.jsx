export default function ImageLink(props) {
  return (
    <>
    {console.log(props.link)}
      <a href={props.link} target="_blank">
        <img id="promo" src={props.link} />
      </a>
    </>
  )
}
