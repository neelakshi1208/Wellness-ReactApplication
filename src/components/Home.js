import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';



const Home=()=>{
    return(
        <>
        <div className="containers"></div>
        <div className="container1">
        <div className="coach">
            <h3>Coach</h3>
            <Link to="/coachsignup"><button className="btn btn-success">Join as a coach</button></Link><br/><br/>
            <Link to="/coachlogin"><button className="btn btn-success">Login as a coach</button></Link><br/>

        </div>
        </div>
        <div className="container2">
        
                <div className="user">
                <h3>User</h3>
                <Link to="/usersignup"><button className="btn btn-success">Join as a user</button></Link><br/><br/>
                <Link to="/userlogin"><button className="btn btn-success">Login as a user</button></Link>
    
            </div>
            </div>
            
            
            </>
    );
};
export default Home;


