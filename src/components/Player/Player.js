import React, { useEffect, useState } from 'react';
import { Close } from '../../assets/SVG/Close';
import { THREEKIT_AUTH_TOKEN } from '../../constants/index';

const Player = ({ setShowModal, assetId }) => {
  const [isHovered, setHovered] = useState(false);
  // inline styles
  const modal = { "backgroundColor": "rgba(0,0,0,0.5)", "position": "fixed", "height": "100%", "width": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center", "top": "0", "left": "0", "zIndex": "999" };
  const modalWrapper = { "height": "440px", "width": "90%", "opacity": "1", "overflow": "auto", "position": "fixed", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" };
  const modalContent = { "height": "400px", "display": "flex", "flexDirection": "column", "backgroundColor": "#fff", "borderRadius": "3px" };
  const closeButtonWrapper = { "display": "flex", "justifyContent": "flex-end" };
  const threekitModalPlayerStyle = { "minHeight": "400px" };
  const closeButton = {
    "boxShadow": isHovered ? "0px 0px 4px rgb(0 0 0 / 25%)" : "inherit", "backgroundColor": isHovered ? "rgba(240, 240, 240, 0.75)" : "rgba(251, 251, 251, 0.5)",
    "position": "absolute", "top": "7px", "right": "7px", "zIndex": "300", "cursor": "pointer", "borderRadius": "100px", "width": "28px", "height": "28px", "display": "flex", "justifyContent": "center", "alignItems": "center", "padding": "4px"
  };

  useEffect(() => {
    const escFunction = (event) => { event.keyCode === 27 && setShowModal(false) }
    document.addEventListener("keydown", escFunction, false);
    return () => window.removeEventListener("keydown", escFunction, false);
  }, [setShowModal]);

  useEffect(() => {
    (async () => {
      try {
        window
          .threekitPlayer({
            assetId,
            authToken: THREEKIT_AUTH_TOKEN,
            el: document.getElementById('threekitModalPlayer'),
            stageId: undefined,
            initialConfiguration: {},
            showConfigurator: false,
            showAR: true,
            cache: { maxAge: 500, scope: "v1.0" },
          })
          .then(function (player) { window.player = player });
      } catch (err) { console.error(err) }
    })();
  }, [assetId]);

  return (
    <div style={modal}>
      <div style={modalWrapper}>
        <div style={modalContent}>
          <div style={closeButtonWrapper}>
            <div
              style={closeButton}
              onClick={() => setShowModal(false)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            ><Close /></div>
          </div>
          <div id='threekitModalPlayer' style={threekitModalPlayerStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
