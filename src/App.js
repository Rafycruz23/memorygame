import Cards from './components/Cards'
function refreshPage() {
  window.location.reload(false);
}
function App() {
  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
        <div className="container">
          <Cards/>
        </div>
          <div>
            <button className="playAgain" onClick={refreshPage}>Click to reload!</button>
          </div>
    </div>
);
  }
export default App;
