import { useEffect, useState } from 'react';

import './App.css';
import { assetsUrl, page2 } from './constants';
import Modal from './Modal';
import Player from './Player';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [assetId, setAssetId] = useState('');
  window.uniqueInternalCode = 'NTEX02121'; // TODO: set global variable on client's web site

  useEffect(() => {    
    (async () => {
      try {
        const assetsResponse0 = new Promise((resolve, reject) => {
          fetch(assetsUrl).then(response => response.json()).then(data => resolve(data));
        });
        const assetsResponse1 = new Promise((resolve, reject) => {
          fetch(assetsUrl + page2).then(response => response.json()).then(data => resolve(data));
          
        });
        
        Promise.all([assetsResponse0, assetsResponse1]).then((response) => {
          const assets1 = response[0]?.assets || [];
          const assets2 = response[1]?.assets || [];

          const assets = [...assets1, ...assets2];

          const assetObj = assets.find(item => item.name === window.uniqueInternalCode) || {}; // find matching data set in products
          setAssetId(assetObj.id);
        });        
      } catch (err) {
        console.log('err = ', err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p>Window uniqueInternalCode variable = {window.uniqueInternalCode}</p>
        <button
          className="viewButton"
          onClick={() => setShowModal(true)}
          disabled={!assetId}
        >
          <img src={require('./assets/SVG/threekit3d.svg').default} alt="icon" />
          <div title={assetId ? undefined : 'Not available'} className="arButtonText">View in 3D</div>
          </button>
      </div>
      {showModal
        ? <Modal><Player assetId={assetId} setShowModal={setShowModal} /></Modal>
        : null}
    </div>
  );
}

export default App;
