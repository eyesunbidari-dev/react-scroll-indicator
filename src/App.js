import Content from "./Content";
import Scrollindicator from "./Scrollindicator";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>خانه</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>سوالات رایج</li>
          </ul>
        </div>
      </header>
      <Scrollindicator />
      <Content />
    </>
  );
}

export default App;
