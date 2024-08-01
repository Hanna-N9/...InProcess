import "./App.css";
import marinedb from "./db.json";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Sea Animals</h1>
      </header>
      <table>
        <tr>
          <th>Name</th>
          <th>Scientific Name</th>
          <th>Diet</th>
          <th>Life Span</th>
          <th>Length</th>
          <th>Average Weight</th>
          <th>Habitat</th>
          <th>Conservation Status</th>
        </tr>

        {marinedb.map(data => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.scientificName}</td>
            <td>{data.diet}</td>
            <td>{data.lifespan}</td>
            <td>{data.length}</td>
            <td>{data.averageWeight}</td>
            <td>{data.habitat}</td>
            <td>{data.conservationStatus}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
