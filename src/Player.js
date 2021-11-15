import React, { useEffect } from 'react';
import { ClosePopup } from './assets/SVG/Close';
import { THREEKIT_AUTH_TOKEN } from './constants/index';

const Player = ({ setShowModal, assetId }) => {

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
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">
          {/* <div className='closeButton' onClick={() => { setShowModal(false) }}>X</div> */}
          {/* <button className="closeButton"
          onClick={() => setShowModal(false)}
        > */}
          {/* <img
            // src="https://preview.threekit.com/js/4169b49e18e94d509b08ad80920c104a.svg"
            src={require('./assets/SVG/close.svg').default}
            alt="icon" /> */}
          {/* <div className="arButtonText">View in 3D</div> */}
          <div className='closeButton'><ClosePopup /></div>
          {/* </button> */}
          <div id="player"></div>
        </div>

      </div>
    </div>
  );
}

export default Player;
