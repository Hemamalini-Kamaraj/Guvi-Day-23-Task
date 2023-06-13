import "./App.css";
import Card from "./card";

function App() {
  
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((e, i) => {
              return <Card value={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;