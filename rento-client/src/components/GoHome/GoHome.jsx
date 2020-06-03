import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";
import { green } from "@material-ui/core/colors";
const GoHome = () => {
    return (
        <div>
            <Link style={{ textDecoration: "none" }} to="/home">
                <HomeRoundedIcon
                    style={{
                        color: green[500],
                        width: "60px",
                        height: "60px",
                    }}
                />
            </Link>
        </div>
    );
};

export default GoHome;
