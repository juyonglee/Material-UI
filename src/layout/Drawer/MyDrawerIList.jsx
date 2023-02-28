import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function MyDrawerIList() {
  return (
      <div>
        <Toolbar/>
        <List>
          <Link component={RouterLink} to={"/repository"} underline={"none"} sx={{color: "black"}}>
              <ListItem key="사용">
                <ListItemButton>
                  <ListItemIcon sx={{minWidth: 40}}>
                    <GitHubIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Github Repository"} primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: '300',
                  }}/>
                </ListItemButton>
              </ListItem>
          </Link>
        </List>
        <Divider/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </div>
  )
}

export default MyDrawerIList
