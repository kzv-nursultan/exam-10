import './App.css';
import MainPage from './containers/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/news/:id' component={}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
