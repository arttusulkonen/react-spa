import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/GetRecipe";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/category/:name" component={Category}/>
            <Route path="/meal/:id" component={Recipe}/>
            {/*<Route path='' component={} />*/}
            <Route component={NotFound} />
         </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
