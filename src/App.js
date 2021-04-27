import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryPage from "./components/CategoriesPage/Categories"
import Location from './components/LocationPage/Location';
import GoogleMap from './components/Map/GoogleMap';


function App() {

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Header/>
    <Home/>
    </Route>
    <Route path="/categories">
    <CategoryPage/>
    </Route>
    <Route path="/location">
    <Location/>
    </Route>
    <Route path="/map">
   {/*<GoogleMap/>*/} 
   <GoogleMap/>
    </Route>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
