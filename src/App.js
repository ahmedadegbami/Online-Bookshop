import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./Components/WarningSign";
import SingleBook from "./Components/SingleBook";
import fantasyBooks from "./fantasyBooks";
import BookList from "./Components/BookList";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./Components/CommentArea";

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
