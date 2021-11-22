import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import Player from './components/Player/Player';
import { assetsUrl, page2 } from './constants';
import styles from './App.css';
import ThreekitButton from './components/ThreekitButton/ThreekitButton';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [assetId, setAssetId] = useState('');
  window.uniqueInternalCode = 'NTEX12921';
  
  useEffect(() => {
    const script = document.createElement("script");
    (async () => {
      try {
        // start threekit player script
        script.src = "https://preview.threekit.com/app/js/threekit-player.js";
        await document.body.appendChild(script);
      
        const assetsResponse0 = new Promise((resolve, reject) => {
          fetch(assetsUrl+ '&perPage=60').then(response => response.json()).then(data => resolve(data));
        });
        const assetsResponse1 = new Promise((resolve, reject) => {
          fetch(assetsUrl + page2).then(response => response.json()).then(data => resolve(data));
        });
        const assetsResponse2 = new Promise((resolve, reject) => {
          fetch(assetsUrl+'&nameLike=NTEX12921').then(response => response.json()).then(data => resolve(data));
        });
        
        Promise.all([assetsResponse0, assetsResponse1, assetsResponse2]).then((response) => {
          console.log(`qqq response [null] = `, response);
          
          
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
  const props = { assetId, setShowModal }
  return (
    <div className={styles.container}>
      <ThreekitButton {...props} />
      {showModal
        ? <Modal><Player {...props} /></Modal>
        : null}
    </div>
  );
}

export default App;
