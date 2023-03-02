import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container, Divider,
  List,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {todoList} from "../sample/todoList";
import {CheckBox} from "@mui/icons-material";

export default function Schedule() {

  const [state, setState] = useState({
    todoList: todoList
  })

  const date = new Date();
  return (
      <Container maxWidth="false">
        <Grid container xs={12} lg={12}>
          <Grid container xs={12} lg={12}>
            <Grid xs={12} lg={6}>
              <Card elevation={5} sx={{width: "100%"}}>
                <CardHeader
                    title="Todo"
                    titleTypographyProps={{variant: "body1", fontWeight: 700}}
                    subheader={date.toLocaleDateString()}
                    subheaderTypographyProps={{variant: "subtitle2"}}
                />
                <Divider variant={"middle"}/>
                <CardContent sx={{minHeight: 500}}>
                  {
                    (state.todoList.length === 0) &&
                        <Box sx={{minHeight: 500}} display="flex" flexGrow={1} justifyContent={"center"} alignItems={"center"}>
                          <Typography variant={"body1"} fontWeight="400">오늘 할일을 추가해주세요.</Typography>
                        </Box>
                  }
                  {
                    state.todoList.map((todoItem, index) => {
                      return (
                          <List>
                            <ListItem key={todoItem.id}>
                              <ListItemButton>
                                <ListItemIcon>
                                <CheckBox tabIndex={-1}/>
                                </ListItemIcon>
                                <ListItemText primary={todoItem.todo} secondary={todoItem.id === 3 && Date.now()}/>
                              </ListItemButton>
                            </ListItem>
                          </List>
                      )
                    })
                  }
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  )
}
