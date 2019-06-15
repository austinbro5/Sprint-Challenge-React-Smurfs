import react from "react"

import{navlink} from "react-router-dom";

const smurfnave=()=>{
    return(
        <div className="nav">
            <navlink to="/" className="link">
                <p>vist the village</p>
            </navlink>
            <navlink to="/smurf-form" className="link">
            </navlink>
        </div>
    );
};
export default smurfnav;