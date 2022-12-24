import {useState} from "react";

import "./index.scss"

function Candle() {

  const [open,setOpen] =useState(false)

  return (
    <div onClick={()=> setOpen(!open)}>
          <div className="candle py-5">
            {open ? <div className="candle-flame"></div>: <div className="candle-flame-empty"></div>}
            
            <div className="candle-wick"></div>
            <div className="candle-wax"></div>
          </div>
    
    </div>
  );
}

export default Candle;
