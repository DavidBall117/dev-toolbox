export default function App() {
  return (
    <div className="App">
      <p>Hello world!</p>
      <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
    </div>
  );
}
