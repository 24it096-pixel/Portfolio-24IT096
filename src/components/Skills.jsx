function Skills({ skillList }) {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <ul className="skills-grid">
        {skillList.map((skill) => (
          <li key={skill} className="skill-card">
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
