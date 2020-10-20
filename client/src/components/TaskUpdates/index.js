import React, { useState, useEffect } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../List";
import API from "../../utils/API";
import taskUpdates from "./style.css";
import Moment from 'react-moment';  

function TaskUpdates() {

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        setTime();
        loadTasks();
    }, [])

    // Loads all tasks and sets them to tasks
    function loadTasks() {
        API.getTasks()
            .then(res => {
                console.log("reloaded: ", res.data);
                setTasks(res.data);
                console.log("tasks: ", tasks);
            }
            )
            .catch(err => console.log(err));
    };

    function setTime() {


        let secondsLeft = 10;

        var timerInterval = setInterval(function () {
            secondsLeft--;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                loadTasks();
                console.log("reloaded data");
                setTime();
            }

        }, 1000);
    }



    return (

        <div className="taskUpdates">
            {tasks.length ? (
                <List>
                    {tasks.map(task => (
                        <ListItem key={task._id}>
                            {/* <Link to={"/tasks/" + task._id}> */}
                            <div><strong>
                                Task Title: {task.title} 
                            <div>Assigned to: {task.user}</div>
                            </strong>
                            </div>
                            <div>
                                <strong>
                                    Status changed to >>> {task.status}{task.icon}
                                </strong>
                            </div>
                            <div>
                                <strong>
                                    Last updated: <Moment format="YYYY-MM-DD HH:mm">{task.lastUpdated}</Moment>
                                </strong>
                            </div>
                            {/* </Link> */}
                            {/* <DeleteBtn onClick={() => deleteTask(task._id)} /> */}
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>

    )



}

export default TaskUpdates;
