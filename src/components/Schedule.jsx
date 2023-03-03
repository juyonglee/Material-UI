import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {todoList} from "../sample/todoList";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TodoMenus from "./todo/TodoMenus";
import TodoCard from "./todo/TodoCard";

export default function Schedule() {

  return (
      <Container maxWidth="false">
        <Grid container xs={12} lg={12}>
          <Grid container xs={12} lg={12}>
            <Grid xs={12} lg={6}>
              <TodoCard/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  )
}
