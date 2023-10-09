import { useNavigate } from "react-router";   
const HomePage = () => {  
    const navigate = useNavigate( )
    return ( 
        <div className="container homepage">
            <div className="card m-4">
                <div className="card-body">
                    <h1>HomePage</h1>
                    <button onClick={() => navigate('/')} className="btn btn-success">Login</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;