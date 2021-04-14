import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
        <main className='container content'>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </main>
      <Footer />
    </>
  );
}

export default App;
