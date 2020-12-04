import logo from './logo.svg';
import './App.css';
import { NavBar } from './container/NavBar';
import { Hero } from './container/Hero';
import { About } from './container/About';
import { Projects } from './container/Projects';
import { Contact } from './container/Contact';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
