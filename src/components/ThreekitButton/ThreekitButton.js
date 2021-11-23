import { useState } from 'react';
import { Threekit3D } from '../../assets/SVG/Threekit3D';

const ThreekitButton = ({ setShowModal, assetId }) => {
  const [isHovered, setHovered] = useState(false);
  // inline styles
  const viewButton = {
    "cursor": !assetId ? "not-allowed" : "pointer",
    "backgroundColor": isHovered ? "#E2E2E2" : "#fff",
    "outline": "0", "display": "flex", "borderRadius": "14.5px", "border": "1px solid #e8e8e8", "width": "fit-content"
  };
  const arButtonText = { "height": "100%", "marginLeft": "10px", "paddingTop": "7px", "marginRight": "15px", "fontSize": "0.9em", "color": "#1BA17B" };

  return (
    <div
      style={viewButton}
      onClick={() => setShowModal(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={!assetId}
    ><Threekit3D />
      <div style={arButtonText} title={!!assetId ? undefined : 'Not available'}>View in 3D</div>
    </div>
  )
}

export default ThreekitButton;
