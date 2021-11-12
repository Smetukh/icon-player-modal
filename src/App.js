import { useState } from 'react';

import './App.css';
import Modal from './Modal';
import Player from './Player';

function App() {
  const [showModal, setShowModal] = useState(false);
  window.assetId = '1176e699-adca-4a4e-9573-d2056a1d3428';

  return (
    <div className="App">
      <div className="App-header">
        <p>Window assetId variable = {window.assetId}</p>
        <button className="viewButton"
          onClick={() => setShowModal(true)}
        >
          <img src="https://preview.threekit.com/js/4169b49e18e94d509b08ad80920c104a.svg" alt="icon" />
          <div className="arButtonText">View in 3D</div>
          </button>
      </div>
      {showModal ? <Modal><Player setShowModal={setShowModal} /></Modal> : null}
    </div>
  );
}

export default App;
