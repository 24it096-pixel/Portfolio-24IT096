import Header from './Header';
import About from './About';
import Skills from './Skills';

function Home() {
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
    <div className="home-page">
      <Header name={studentId} />
      <div className="content-container">
        <About />
        <Skills skillList={skills} />
      </div>
    </div>
  );
}

export default Home;
