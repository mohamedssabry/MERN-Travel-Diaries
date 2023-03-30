import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { useSelector } from "react-redux";

const linksArr = ["home", "diaries", "auth"];
const isLoggedInLinks = ["home", "diaries", "add", "profile"];

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />

        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {isLoggedIn
            ? isLoggedInLinks.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))
            : linksArr.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
