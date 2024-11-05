import { Routes, Route} from 'react-router-dom'
import Profile from '../pages/editProfile';
import User from '../pages/User'
import Report from '../pages/report'
import ProfileUser from '../components/UserProfile'
import CreateUser from '../pages/CreateUser'
import Home from '../pages/home'
import ReportPage from '../pages/reportPage'
import BanRequest from '../pages/banRequest';
import Login from '../pages/Login';
import EsqueceuSenha from '../pages/Forgot';
import Cadastro from '../pages/Cadastro'
import EmailConfirmation from '../pages/emailConfirmation'



function RoutesApp() {
    return(
        <Routes>

            
            <Route path="/login" element={ <Login/>} />
            <Route path="/cadastro" element={ <Cadastro/>} />
            <Route path="/esqueceuSenha" element={ <EsqueceuSenha/>} />
            <Route path="/" element={ <Home/>} />
            <Route path='/createUser' element = { <CreateUser/> } />
            <Route path="/user" element={ <User/>} />
            <Route path='/editProfile' element = {  <Profile/> }/>
            <Route path='/profile/:userId' element = { <ProfileUser/> } />
            <Route path='/report/:userId/:profileName' element = { <Report/> } />
            <Route path='/reportPage' element = { <ReportPage/> } />
            <Route path='/banRequest' element = { <BanRequest/> } />
            <Route path='/emailConfirmation' element = { <EmailConfirmation/> } />

        </Routes>
    )
}

export default RoutesApp;
