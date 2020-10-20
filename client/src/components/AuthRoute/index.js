import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import Loading from "../../pages/Loading"
import API from "../../utils/API"

import Tasks from "../../pages/Tasks";
import Detail from "../../pages/Detail";
import NoMatch from "../../pages/NoMatch";
import Nav from "../Nav";
import Person from "../../pages/Person";
import Team from "../../pages/Team";
import Resources from "../../pages/Resources";
import Login from "../../pages/Login";
import loginStyle from "../../style/style.css";
import personRoot from "../../style/style.css";
import teamRoot from "../../style/style.css";

function AuthRoute() {
    //const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        changeUserData: (name, value) => setUserData({...userData, [name]: value })
    });

    const [state, setState] = useState({
        id: "",
        error: null,
        isAuthenticated: false,
        changeState: (name, value) => setState({ ...state, [name]: value })
    })




    return (
        <Switch>
            {state.isAuthenticated ?

                (
                    <BrowserRouter>
                        <Nav  userData={userData} />
                        <Redirect to="/Team" />
                        <Route exact path={"/Person"}>
                            <Person userData={userData} className={personRoot}/>
                        </Route>
                        <Route exact path="/Team">
                            <Team className={teamRoot}/>
                        </Route>
                        <Route exact path="/Resources">
                            <Resources username={userData.username} changeState={state.changeState} />
                        </Route>
                    </BrowserRouter>)

                : (
                    <Route><Login className={loginStyle} firstName={userData} changeUserData={userData.changeUserData} isAuthenticated={state.isAuthenticated} changeState={state.changeState} />
                        <Redirect to="/" />
                    </Route>
                )}

            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}

export default AuthRoute;
