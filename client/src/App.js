import "./App.css";
import marinedb from "./db.json";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Sea Animals</h1>
      </header>

      {marinedb.map(data => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
}
