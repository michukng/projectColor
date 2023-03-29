import './index.css';
import ColorForm from './ColorForm';
import ColorListForm from './ColorListForm';
import Color from "./ClassColor";
import { useState } from 'react';


function App() {
  const ffffff = new Color("#FFFFFF", "#FFFFFF");
  const e2e2e2 = new Color("#E2E2E2", "#E2E2E2");
  const e4e2e2 = new Color("#E4E2E2", "#E4E2E2");

  const [colorsList, setColorsList] = useState(JSON.parse(localStorage.getItem('COLORS')) || [e2e2e2.name, e4e2e2.name, ffffff.name])
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <main>
        <section className='colorForm'>
          <ColorForm 
            color={color}
            setColor={setColor}
            colorsList={colorsList}
            setColorsList={setColorsList}
          />
        </section>
        <section className='colorlistform'>
          <ColorListForm 
            colorsList={colorsList}
            setColorsList={setColorsList}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
