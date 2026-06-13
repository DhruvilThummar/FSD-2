import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Nopage from './Nopage.jsx'

function My(){
    return(
        <div>
            <Router>
                <ul>
                    <li><Link  to="/">Home</Link></li>
                    <li><Link  to="/sp">Shop</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sp" element={<Shop/>}/>
                    <Route path="*" element={<Nopage/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default My;