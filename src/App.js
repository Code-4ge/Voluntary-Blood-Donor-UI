import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBlood from "./Component/RequestBlood/SearchBlood";
import RequestForm from './Component/RequestBlood/RequestForm';
import { Header, Info } from "./Component/HomePage";
import SignIn from './Component/SignIn_Up/SignIn';
import SignUp from './Component/SignIn_Up/SignUp';
import UserSignUp from './Component/SignIn_Up/UserSignUp';
import Loading from './Component/Loading';
import VerifyAccount from './Component/VerifyAccount';
import Dashboard from './Component/Dashboard';
import userSetting from './Component/Dashboard/Setting';
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
			<Route path='/loading' exact component={Loading}/>
			<Route path='/signin' exact component={SignIn}/>
			<Route path='/donors/signup' exact component={SignUp}/>
			<Route path='/user/signup' exact component={UserSignUp}/>
			<Route path='/search-for-blood' exact component={SearchBlood}/>
			<Route path='/registration/verification/:token' exact component={VerifyAccount}/>
			<Route path='/about' exact component={About}/>
			<AuthenticatedRoute path='/send-request' exact component={RequestForm}/>
			<AuthenticatedRoute path='/dashboard' exact component={Dashboard} />
			<AuthenticatedRoute path='/dashboard/settings' exact component={userSetting} />
        </Switch>
      </Router>
	  <Footer/>
    </>
  );
}

export default App;

