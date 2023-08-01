// import { MouseEvent } from "react";
interface ListGroupProps {
  Items: string[];
  heading: string;
}


import { useState } from "react";


function ListGroup({ Items, heading }: ListGroupProps) {

  //hook
  const [SelectedIndex, setSelectedIndex] = useState(-1);


  const message = Items.length === 0 ? <p>No item found!</p> : null;

  //event handler//
  // const HandleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {message}
      {/* {Items.length === 0 && <p>no item found</p> } */}
      <ul className="list-group">
        {Items.map((item, index) => (
          <li
            id={item}
            onClick={() => { setSelectedIndex(index) }}
            className={SelectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
