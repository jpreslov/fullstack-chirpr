import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Compose from "./views/Compose";

const App: React.FC<AppProps> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/admin/:id">
            <Admin />
          </Route>
          <Route exact path="/compose">
            <Compose />
          </Route>
        </Switch>
      </BrowserRouter>
    </>

    	// <Router>
		// 	<nav>
    //     <ul className="nav justify-content-end bg-info">
    //         <li className="nav-item">
    //           <a className="nav-link active" href="#">Link</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
    //         </li>
    //       </ul>
    // </nav>
		// 	<Switch>
		// 		{/* <Route exact path="/" component={Reminder} /> */}
				
		// 	</Switch>
    // </Router>
    
    <style>
        body {
            margin: 3em;
            padding: 2em;
        }

        .header-text {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 50px;
            font-weight: bold;
            text-transform: uppercase;
        }

        .paragraph-text {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
        }

        .generic-div {
            height: 20em;
            width: 32em;
            box-shadow: -8px 20px 30px 10px rgb(181, 181, 181);
            border-radius: 10px;
        }

        .task-div {
            background-color: rgb(34, 34, 34);
            margin-top: 3em;
            height: 30em;
            width: 20em;
            box-shadow: -8px 20px 30px 10px rgb(181, 181, 181);
            border-radius: 10px;
        }

        .reminder-div {
            margin-top: 3em;
            height: 30em;
            width: 20em;
            box-shadow: -8px 20px 30px 10px rgb(181, 181, 181);
            border-radius: 10px;
            margin-bottom: 2em;
        }

        .big-btn {
            border: 2px solid black;
            border-radius: 10px;
            color: black;
            padding: 14px 28px;
            font-size: 16px;
            cursor: pointer;
        }

        .small-btn {
            border: 2px solid black;
            border-radius: 10px;
            width: 20em;
            color: black;
            padding: 14px 28px;
            font-size: 16px;
            cursor: pointer;
        }

        .modal-btn {
            border: 2px solid black;
            border-radius: 10px;
            color: black;
            padding: 14px 28px;
            font-size: 16px;
            cursor: pointer;
        }

        .nav-link {
            font-family: Arial, Helvetica, sans-serif;
            color: black;
        }

        .generic-form{
            margin-top: 3em;
            margin-bottom: 3em;
            padding: 3em;
            height: 24em;
            width: 32em;
            box-shadow: -8px 20px 30px 10px rgb(181, 181, 181);
            border-radius: 10px;
        }

        .modal-dialog {
            box-shadow: -8px 20px 30px 10px rgb(181, 181, 181);
            border-radius: 10px;
        }

        .task-list{
            padding: 2em;
            width: 14em;
            margin: 1em;
            border: solid rgb(182, 182, 182) 1px;
            border-radius: 10px;
        }
    </style>
  );
};

interface AppProps {}

export default App;
