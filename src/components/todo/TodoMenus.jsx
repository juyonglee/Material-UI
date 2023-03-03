import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {IconButton, ListItemIcon, ListItemText, Menu} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoMenus({todoID}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, todoID) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const todoMenuHandler = (event, todoID, type) => {
    if (type === "delete") {
      console.log(type, todoID)
    } else if (type === "edit") {
      console.log(type, todoID)
    }
    setAnchorEl(null);
  };

  return (
      <div>
        <IconButton edge={"end"} id="demo-positioned-button"
                    onClick={e => handleClick(e, todoID)}>
          <MoreVertIcon fontSize={"small"}/>
        </IconButton>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{horizontal: "left", vertical: "top"}}
        >
          <MenuItem onClick={e => todoMenuHandler(e, todoID, "edit")} dense={true}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>수정</ListItemText>
          </MenuItem>
          <MenuItem onClick={e => todoMenuHandler(e, todoID, "delete")} dense={true}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>삭제</ListItemText>
          </MenuItem>
        </Menu>
      </div>
  );
}
