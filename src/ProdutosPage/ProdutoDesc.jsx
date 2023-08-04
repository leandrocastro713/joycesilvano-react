import Tags from "./Tags/Tags";

export default function ProdutoDesc({ xref, title, tags, text }) {
    console.log(xref, title, tags, text)

  return (
    <div className="produto_card">
      <a href= {xref}  target="_blank">
        <img src={ xref } alt="" />
      </a>
      <div className="card_text">
        <div>
          <h2>{ title }</h2>
          <Tags tags={ tags } />
          <p>{ text }
          </p>
        </div>
      </div>
    </div>
  );
}
