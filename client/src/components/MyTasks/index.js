import React, { useState, useEffect } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../List";
import API from "../../utils/API";
import myTasks from "./style.css";

function MyTasks(props) {
    console.log("myTasks props. Did i get firstname of user? ", props);


    const [tasks, setTasks] = useState([]);

    const [userName, setUserName] = useState({});



    useEffect(() => {
        setTime();
        loadTasks();
    }, [])

    // Loads all tasks and sets them to tasks
    function loadTasks(props) {
        console.log("am i getting any props to loadTasks: ", props);

        API.getTasks()
            .then(res => {
                console.log("myTasks reloaded: ", res.data);
                (res.data.map(data => {
                    console.log("finding user from mytasks: ", data.user.toLowerCase());
                     if(data.user.toLowerCase() === userName.toLowerCase()){
                        setTasks(res.data);
                        console.log("did I get mytasks?: ", tasks);
                     }
                }
                ))
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

        <div className="myTasks">
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
                                    Last updated: {task.lastUpdated}
                                </strong>
                            </div>
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>You have no tasks assigned to you!</h3>
                )}
        </div>

    )



}

export default MyTasks;
