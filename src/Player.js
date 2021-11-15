import React, { useEffect } from 'react';
import { ClosePopup } from './assets/SVG/Close';
import { THREEKIT_AUTH_TOKEN } from './constants/index';

const Player = ({ setShowModal, assetId }) => {

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      setShowModal(false);
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => window.removeEventListener("keydown", escFunction, false);
  }, [])

  useEffect(() => {
    (async () => {
      try {
        window
        .threekitPlayer({
          assetId,
          authToken: THREEKIT_AUTH_TOKEN,
          el: document.getElementById("player"),
          stageId: undefined,
          initialConfiguration: {
            //  'Attribute Name': {
            //     assetId: '4a9f7980-78a4-4ace-8cda-f2799936c4dc',
            //     configuration: { 'key' : 'value'}
            //   }
          },
          showConfigurator: false,
          showAR: true,
          cache: {
            maxAge: 500,
            scope: "v1.0",
          },
        })
        .then(function (player) {
          window.player = player;
        });
      } catch (err) {
        console.error(err)
      }
    })();

  }, [assetId])
  return (
    <div className="modal"
      // onClick={() => setShowModal(false)}
    >
      <div className="modal-wrapper"
        // onClick={(e) => e.preventDefault()}
      >
        <div className="modal-content">
          <div className='closeButton' onClick={() => setShowModal(false)}><ClosePopup /></div>
          <div id="player"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
