import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasyBooks from "./fantasyBooks";
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WarningSign text="A strong warning !!" color="danger" />
        <SingleBook book={fantasyBooks[0]} /> */}

        <BookList books={fantasyBooks} />
      </header>
    </div>
  );
}

export default App;
