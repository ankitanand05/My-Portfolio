import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Loading from './components/common/Loading/Loading';
import ChatBot from './components/chatbot/ChatBot';
import { useTheme } from './hooks/useTheme';
import './styles/variables.css';
import './styles/globals.css';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;