import React from 'react';

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <ol style={{ listStyleType: 'decimal' }}>
        <li>HTML</li>
        <progress value="70" max="100"></progress>
        <li>CSS</li>
        <progress value="70" max="100"></progress>
        <li>JavaScript</li>
        <progress value="70" max="100"></progress>
        <li>React.js</li>
        <progress value="70" max="100"></progress>
        <li>GitHub</li>
        <progress value="70" max="100"></progress>
      </ol>
    </div>
  );
};

export default Skills;
