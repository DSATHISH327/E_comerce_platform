import React from "react";
import "./Skills.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Skills = () => {
  return (
    <div className="skills">
      <Stack spacing={1} className="stack-container">
        <h4>Html 5</h4>
        <Rating name="size-large" defaultValue={5} size="large" readOnly/>
        <h4>Css 3</h4>
        <Rating name="size-large" defaultValue={4} size="large" readOnly/>
        <h4>Java Script</h4>
        <Rating name="size-large" defaultValue={4} size="large" readOnly/>
        <h4>React js</h4>
        <Rating name="size-large" defaultValue={2} size="large" readOnly/>
        <h4>Git hub</h4>
        <Rating name="size-large" defaultValue={3} size="large" readOnly/>
      </Stack>
    </div>
  );
};

export default Skills;
