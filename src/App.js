import { useState } from "react";
import { Button } from "./components";
import "./App.css";

const selectionButtons = [
  {
    key: `button-${1}`,
    text: 1,
  },
  {
    key: `button-${2}`,
    text: 2,
  },
  {
    key: `button-${3}`,
    text: 3,
  },
];

function App() {
  const [initialButtonState, setInitialButtonState] = useState(1);
  const [selectionButtonsHidden, setSelectionButtonsHidden] = useState(true);

  const handleInitialButtonClick = () => {
    setSelectionButtonsHidden(false);
  };

  const handleSelectionButtonClick = (e) => {
    setInitialButtonState(e.target.value);
    setSelectionButtonsHidden(true);
  };

  return (
    <div className="app-wrapper">
      <div className="initial-button buttons">
        <Button
          key="initial-button"
          text={initialButtonState}
          onClick={handleInitialButtonClick}
        />
      </div>
      <div className="selection-buttons buttons">
        {!selectionButtonsHidden &&
          selectionButtons.map((item) => (
            <Button {...item} onClick={handleSelectionButtonClick} />
          ))}
      </div>
    </div>
  );
}

export default App;
