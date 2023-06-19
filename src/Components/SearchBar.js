import { Badge, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
            </div>
        </form>

        
        <div>
          <IconButton aria-label="notify">
            <Badge badgeContent={"7+"} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="mail">
            <Badge badgeContent={"10"} color="error">
              <EmailIcon />
            </Badge>
          </IconButton>
          <span className="p-name">Hemamalini K</span>
          <IconButton aria-label="Acc">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default SearchBar;