function ListGroup() {
  const Items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  if (Items.length === 0) return <p>No items found.</p>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {Items.map((item) => (
          <li id={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
