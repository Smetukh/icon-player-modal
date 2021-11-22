import React, { useEffect } from 'react';
import { Close } from '../../assets/SVG/Close';
import { THREEKIT_AUTH_TOKEN } from '../../constants/index';
import styles from './Player.module.css';

const Player = ({ setShowModal, assetId }) => {
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
          el: document.getElementById(styles.threekitModalPlayer),
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
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.closeButtonWrapper}>
            <div className={styles.closeButton} onClick={() => setShowModal(false)}><Close /></div>
          </div>
          <div id={styles.threekitModalPlayer}></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
