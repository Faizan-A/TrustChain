import Card from "./components/card";

function Button() {
  return <button className="click">click it!</button>;
}

function App() {
  return (
    <>
      <div className="parents">
      
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        
      </div>
      <div>
        <p className="p">dkfkdfjkdjfkdk</p>
        <Button />
      </div>
    </>
  );
}
export default App;
