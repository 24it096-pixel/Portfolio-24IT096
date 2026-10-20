import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  const studentId = 'Student 24IT096';
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript\n(ES6+)',
    'React',
    'Vite',
    'Git',
    'Responsive\nDesign'
  ];

  return (
    <div className="portfolio-app">
      <Header name={studentId} />
      <main className="content-container">
        <About />
        <Skills skillList={skills} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
