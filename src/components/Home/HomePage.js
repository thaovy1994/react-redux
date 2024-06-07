import { FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-1">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
        </video>
        <div className="homepage-content">
          <div className="title-1">There's a better way to ask</div>
          <div className="title-2">
            You don't want to make a boring form. And your audience won't answer
            one. Create a typeform instead-and make everyone happy.
          </div>
          <div className="title-3">
            <button>Get's started</button>
          </div>
        </div>
      </div>
      <div className="homepage-2">
        <div className="form-control signin-form">
          <form action="#">
            <button
              className="btn btn-light mt-3"
              onClick={() => {
                navigate("/register");
              }}
            >
              Log in with Recruit ID
            </button>
            <button className="btn btn-dark mt-3 mb-3">
              New memeber registration
            </button>
          </form>
          <span>or signin with</span>
          <div className="socials">
            <FaFacebook
              className="mx-1 mt-1 mb-1"
              size={"30px"}
              color={"rgb(8, 4, 236, 0.949)"}
            />
            <FaGooglePlus
              className="mx-1 mt-1 mb-1"
              size={"30px"}
              color={"rgb(225, 52, 52, 0.862)"}
            />
            <FaLinkedin
              className="mt-1 mb-1"
              size={"30px"}
              color={"rgb(87, 79, 227, 0.949)"}
            />
          </div>
          <div>
            <div className="link-registered-hiring">
              <a href="link-for-registered-members">
                Click here if you registered as a member before the renewal
              </a>
              <br />
              <a href="link-for-hiring-company">
                Click here if you are in charge of the hiring company
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
