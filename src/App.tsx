import { NavLink } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.min.css";

const projects = {
  prank: '/prank',
  shipher: '/shipher',
  greeting: '/greeting',
}

function App() {
  return (
    <div className="mainMenu">
      <h1>Select project</h1>
      <main className="apps">
        {Object.entries(projects).map(([name, path]: [string, string]) => (
          <NavLink key={name} to={path} className={"navLink"}>
            {name}
          </NavLink>
        ))}
      </main>
    </div>
  );
}

export default App;
