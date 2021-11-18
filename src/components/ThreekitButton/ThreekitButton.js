import './ThreekitButton.css';

const ThreekitButton = ({ setShowModal, assetId }) => {
  return (
    <button className="viewButton" onClick={() => setShowModal(true)} disabled={!assetId}>
      <img src={require('../../assets/SVG/threekit3d.svg').default} alt="icon" />
      <div className="arButtonText" title={!!assetId ? undefined : 'Not available'}>View in 3D</div>
    </button>
  )
}

export default ThreekitButton;
