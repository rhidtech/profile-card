import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(params) {
  return <img className="avatar" src="rhidtech.jpg" alt="ridwan" />;
}

function Intro(params) {
  return (
    <div>
      <h1>Ridwan Salami</h1>
      <p>
        Embark on a journey with a curious soul delving into the world of React!
        With a passion for creativity and problem-solving, they've set out to
        unravel the mysteries of front-end development. Armed with determination
        and a thirst for knowledge, they're ready to conquer the challenges of
        React and turn their ideas into stunning web applications. Join them as
        they navigate through the exciting realm of components, states, and
        props, all while crafting their own digital masterpieces.
      </p>
    </div>
  );
}

function SkillList(params) {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="BootStrap" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
