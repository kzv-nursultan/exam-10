import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import ReadMore from './containers/ReadMore/ReadMore';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/news/:id' component={ReadMore}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
