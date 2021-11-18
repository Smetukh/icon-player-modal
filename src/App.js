import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import Player from './components/Player/Player';
import { assetsUrl, page2 } from './constants';
import './App.css';
import ThreekitButton from './components/ThreekitButton/ThreekitButton';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [assetId, setAssetId] = useState('');

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
  const props = { assetId, setShowModal }
  return (
    <>

      <ThreekitButton {...props} />
      {showModal
        ? <Modal><Player {...props} /></Modal>
        : null}
    </>
  );
}

export default App;
