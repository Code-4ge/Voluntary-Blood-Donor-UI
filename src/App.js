import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReqBlood from "./Component/ReqBlood";
import { Header, Info } from "./Component/HomePage";
import SignIn from './Component/SignIn_Up/SignIn';
import SignUp from './Component/SignIn_Up/SignUp';
import Loading from './Component/Loading';
import VerifyAccount from './Component/VerifyAccount';
import Dashboard from './Component/Dashboard';
import Settings from './Component/Settings';
import AuthenticatedRoute from './Service/AuthenticatedRoute';
import About from './Component/About';
import Footer from './Component/Footer';
import './App.css';
import Navbar from './Component/Navbar';

function App() {
  return (
	  <>
	  <Navbar />
      <Router>
        <Switch>
			<Route path='/' exact>
				<Header />
				<Info />
			</Route>
			<Route path='/Reqblood' exact component={ReqBlood}/>
			<Route path='/SignIn' exact component={SignIn}/>
			<Route path='/SignUp' exact component={SignUp}/>
			<Route path='/loading' exact component={Loading}/>
			<Route path='/registration/verification/:token' exact component={VerifyAccount}/>
			<AuthenticatedRoute path='/dashboard' exact component={Dashboard} />
			<AuthenticatedRoute path='/dashboard/settings' exact component={Settings} />
			<Route path='/About' exact component={About}/>
        </Switch>
      </Router>
	  <Footer/>
    </>
  );
}

export default App;

