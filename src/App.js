import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import { assetsUrl } from './constants';
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
        document.body.appendChild(script);
        // get asset id
        const response = await fetch(assetsUrl + `&name=${window.uniqueInternalCode}`).then(response => response.json()) || {};
        setAssetId(response.assets[0]?.id);        
      } catch (err) {
        console.log('err = ', err);
      }
    })();
  }, []);
  const props = { assetId, setShowModal }
  return (
    <>
      <ThreekitButton {...props} />
      {showModal ? <Player {...props} /> : null}
    </>
  );
}

export default App;
