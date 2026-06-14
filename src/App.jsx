import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import SystemProfile from './components/SystemProfile';
import OperationsCenter from './components/OperationsCenter';
import InfraTopology from './components/InfraTopology';
import TechArsenal from './components/TechArsenal';
import Projects from './components/Projects';
import ContactCenter from './components/ContactCenter';
import CloudQuiz from './components/CloudQuiz';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />
        <Terminal />
        <SystemProfile />
        <OperationsCenter />
        <InfraTopology />
        <TechArsenal />
        <Projects />
        <ContactCenter />
        <CloudQuiz />
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
