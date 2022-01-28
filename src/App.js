import { useHistory } from "react-router-dom";
import { Switch, Route} from "react-router-dom";
import BasicForm from "./formValidateSchema";
import './App.css';
import undraw from "./assests/undraw.svg"


export default function App(){

  return(
    <div className="app">
        
   
           <Switch>
             <Route exact path="/">
              <Welcome/>
             </Route>
           <Route path ="/form">
             <BasicForm/>
           </Route>
           </Switch>
    </div>
  )
}

function Welcome(){
  const history = useHistory();
  return(
    <div className="conatiner mt-3">
        <h1 className="text-center"><span>Formik</span> Validation </h1>
        <p className="text=muted text-center">(click on below button to Sign-up)</p>
        <img className=" undraw" src={undraw} alt="" />
         {/* sign-up page */}
         <button onClick={()=> {
           history.push("/form")}} className = " button btn btn-primary">Sign Up
           </button>
        </div>
  )
}


