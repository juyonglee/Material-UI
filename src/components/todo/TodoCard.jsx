import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
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
import TodoMenus from "./TodoMenus";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {useState} from "react";
import {todoList} from "../../sample/todoList";
import {addTodo} from "../../redux/actions/todoAction";

export default function TodoCard() {

  const date = new Date()

  const [state, setState] = useState({
    todoList: todoList,
    todoInputValue: ""
  })

  const todoInputHandler = (e) => {
    setState(prevState => {
      return {
        ...prevState,
        todoInputValue: e.target.value
      }
    })
  }

  const todoKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      console.log("Click!")
    }
  }

  const handleToggle = (index) => () => {
    const completeState = !state.todoList[index].complete
    state.todoList[index].complete = completeState
    if (completeState) {
      state.todoList[index].completeTime = date.toLocaleTimeString()
    }
    setState(prevState => {
      return {
        ...prevState
      }
    })
  };

  return (
      <Card elevation={5} sx={{width: "100%"}}>
        <CardHeader
            title="Todo"
            titleTypographyProps={{variant: "body1", fontWeight: 700}}
            subheader={date.toLocaleDateString()}
            subheaderTypographyProps={{variant: "subtitle2"}}
        />
        <Divider variant={"middle"}/>
        <CardContent>
          {
            (state.todoList.length === 0) &&
            <Box sx={{minHeight: 500}} display="flex" flexGrow={1} justifyContent={"center"} alignItems={"center"}>
              <Typography variant={"body1"} fontWeight="400">오늘 할일을 추가해주세요.</Typography>
            </Box>
          }
          {
            (state.todoList.length !== 0) &&
            <Box sx={{maxHeight: 500, overflowY: "scroll"}} display="flex" flexGrow={1}>
              <List sx={{width: "100%", paddingTop: 0}} dense={true}>
                {
                  state.todoList.map((todoItem, index) => {
                    return (
                        <ListItem
                            key={todoItem.id}
                            secondaryAction={
                              !todoItem.complete &&
                              <TodoMenus todoID={todoItem.id}/>
                            }
                        >
                          <ListItemButton onClick={handleToggle(index)}>
                            <ListItemIcon>
                              <Checkbox  edge="start" tabIndex={-1} checked={todoItem.complete} disableRipple={true}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={todoItem.todo}
                                secondary={todoItem.complete && todoItem.completeTime}
                                primaryTypographyProps={
                                  {
                                    variant: "subtitle1",
                                    fontWeight: 500,
                                    fontStyle: todoItem.complete && {textDecorationLine: "line-through", color: "gray", fontStyle: "oblique"}
                                  }
                                }
                            />
                          </ListItemButton>
                        </ListItem>
                    )
                  })
                }
              </List>
            </Box>
          }
        </CardContent>
        <CardActions>
          <Stack alignItems={"center"} flexDirection={"row"} flexGrow={1} sx={{borderRadius: 10, backgroundColor: '#ECEFF1'}} paddingLeft={3} marginBottom={1}>
            <TextField value={state.todoInputValue} onKeyPress={todoKeyDownHandler} onChange={todoInputHandler} placeholder={"할일을 입력해주세요."} variant="standard" size={"small"} sx={{flexGrow: 1, paddingTop: 0.5}} InputProps={{ disableUnderline: true }}/>
            <IconButton aria-label="delete">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
  )
}
