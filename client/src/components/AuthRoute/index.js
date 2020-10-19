import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "../../pages/Loading"
import API from "../../utils/API"

import Tasks from "../../pages/Tasks";
import Detail from "../../pages/Detail";
import NoMatch from "../../pages/NoMatch";
import Nav from "../Nav";
import Person from "../../pages/Person";
import Team from "../../pages/Team";
import Resources from "../../pages/Resources";
import Login from "../../pages/Login";



function AuthRoute() {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: ""
    });

    const [state, setState] = useState({
        id: "",
        error: null,
        isAuthenticated: false,
        changeState: (name, value) => setState({ ...state, [name]: value })
    })

    useEffect(() => {
        checkAuthentication();
    }, [state.isAuthenticated])

    const checkAuthentication = async () => {
        await API.isLoggedIn()
            .then(async res => {
                setLoading(true);
                if (res.data.success === true) {
                    setState({
                        ...state,
                        id: res.data.user.id,
                        isAuthenticated: true,
                    });

                    setLoading(false);
                };
                setLoading(false)
            });
    };


    return (
        <Switch>
            {loading ? <Loading /> :
                state.isAuthenticated ?
                    
                        (
                            <BrowserRouter>
                                {/* <Route exact path={["/person"]}> */}
                                <Route exact path={["/person"]}>
                                    <Person userData={userData} />
                                </Route>
                                <Route exact path="/team">
                                    <Team  />
                                </Route>
                                <Route exact path="/resources">
                                    <Resources username={userData.username} changeState={state.changeState} />
                                </Route>
                            </BrowserRouter>)
                
                    : (
                        <Route><Login isAuthenticated={state.isAuthenticated} changeState={state.changeState} />
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
