import './Home.css';
import selfie from './images/selfie.jpg';
const Home = () => {
    return(
        <div className="row welcome">
            <div className="col-6 profile">
                <div className="row">
                    <span className="col-lg-4 col-md-12 picture"> <img src={selfie} alt="profile pic"/> </span>
                    <span className="col-lg-6 col-md-12">Hi there! If you're visiting this site I'm assuming you're either someone who's seen my application or someone I know that I'm just showing off too. You can find all my projects on github but I thought this might make it easier to navigate for the sake of convenience, feel free to use the navbar at the top to look around!</span>
                </div>
            </div>
        </div>
    )
}
export default Home;