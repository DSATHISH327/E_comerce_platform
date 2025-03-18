import React from 'react';
import './Skills.css';
const Skills = () => {
  return (
    <div>
      <center>
      <h2>Skills</h2>
      <ol style={{ listStyleType: 'decimal' }}>
        <li>HTML</li>
        <progress value="90" max="100"></progress>
        <li>CSS</li>
        <progress value="70" max="100"></progress>
        <li>JavaScript</li>
        <progress value="60" max="100"></progress>
        <li>React.js</li>
        <progress value="30" max="100"></progress>
        <li>GitHub</li>
        <progress value="70" max="100"></progress>
      </ol>
      </center>
    </div>
  );
};

export default Skills;
