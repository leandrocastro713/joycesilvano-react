import { useState } from "react";

export default function Tags( {tags} ) {
  console.log(tags.typeOf)
  // const [xtag, set_xtag] = useState([])
  // set_xtag(tags)

  return (
    <div style = {{ display:'flex',
                    flexWrap:'wrap',
                    width:'100%',
                    margin: '0 0 .8rem'}}>
      {tags.map((tag) => (
        <p
          style={{
            display:'flex',
            width:'fit-content',
            color: "white",
            backgroundColor: "gray",
            borderRadius: "4px",
            padding: "4px 5px 1px",
            margin: '2px'
          }}
        >
        {(tag)}
        </p>
      ))}
    </div>
  );
}
