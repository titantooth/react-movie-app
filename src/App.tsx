import ListGroup from "./components/ListGroup";
function App() {
  const Items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return <div><ListGroup Items={Items} heading="Cities" /></div>;
}

export default App;