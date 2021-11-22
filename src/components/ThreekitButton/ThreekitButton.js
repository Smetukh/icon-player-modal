import styles from './ThreekitButton.module.css';

const ThreekitButton = ({ setShowModal, assetId }) =>
  <button className={styles.viewButton} onClick={() => setShowModal(true)} disabled={!assetId}>
    <img src={require('../../assets/SVG/threekit3d.svg').default} alt="icon" />
    <div className={styles.arButtonText} title={!!assetId ? undefined : 'Not available'}>View in 3D</div>
  </button>;

export default ThreekitButton;
