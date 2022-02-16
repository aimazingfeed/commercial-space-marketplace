import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageHandler from '../pages/HomePageHandler';

const AppRoutes = () => {
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePageHandler/>}/>
            <Route exact path="/map"/>
            <Route exact path="/lots"/>
            <Route exact path="/terms"/>
            <Route exact path="/contacts"/>
            <Route exact path="/login"/>
            <Route exact path="/admin"/>
        </Routes>
    </Router>
    );
}

export default AppRoutes;
