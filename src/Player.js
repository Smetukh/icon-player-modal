import React, { useEffect } from 'react';

const Player = ({ setShowModal }) => {

  useEffect(() => {
    (async () => {
      try {
        window
        .threekitPlayer({
          authToken: "59868a4b-25d0-48ae-9604-012e1071af3d",
          el: document.getElementById("player"),
          stageId: undefined,
          assetId: window.assetId,
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

  }, [])
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className='closeButton' onClick={() => { setShowModal(false) }}>X</div>
          <div id="player"></div>
        </div>

      </div>
    </div>
  );
}

export default Player;
