import './App.css';
import TableMain from './table'
import AddForm from './Components/addForm';
import UpdateForm from './Components/updateForm';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={TableMain}></Route>
      <Route exact path="/add" component={AddForm}></Route>
      <Route exact path="/update/:id" component={UpdateForm}></Route>
      <Route exact path="/edit/:id" component={UpdateForm}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
