import React from "react";

import "./index.scss"

function Candle() {
  return (
    <div>
          <div className="candle py-5">
            <div className="candle-flame"></div>
            <div className="candle-wick"></div>
            <div className="candle-wax"></div>
            <div className="candle-stand"></div>
          </div>
    
    </div>
  );
}

export default Candle;
