import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomTypography from "../components/Typography/Typography";

const MainPage = () => {
  return (
    <div>
      <Grid>
        <ul>
          <li className="nav-item">
            <Link
              exact
              to="/home"
            //   activeClassName="active"
            //   className="nav-links"
              //   onClick={click ? handleClick : null}
            >
              <CustomTypography
                text="Home"
                // customClass="Appbar"
                type="header"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/about"
            //   activeClassName="active"
            //   className="nav-links"
              //   onClick={click ? handleClick : null}
            >
              <CustomTypography
                text="About"
                // customClass="Appbar"
                type="header"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/contact"
            //   activeClassName="active"
            //   className="nav-links"
              //   onClick={click ? handleClick : null}
            >
              <CustomTypography
                text="Contact"
                // customClass="Appbar"
                type="header"
              />
            </Link>
          </li>
        </ul>
      </Grid>
    </div>
  );
};

export default MainPage;
