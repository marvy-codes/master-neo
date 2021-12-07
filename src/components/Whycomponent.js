import '../css/Whycomponent.css';
import whylogo1 from "../images/whylogo1.png";
import whylogo2 from "../images/whylogo2.png";
import whylogo3 from "../images/whylogo3.png";
import whylogo4 from "../images/whylogo4.png";
import whylogo5 from "../images/whylogo5.png";

function Whycomponent() {
  return (
    <div className="Why">
        <h5>Why should we <span className="MNMA"> manage your project?</span></h5>

        <div className="container">
            <div className="slider"></div>    
            <div className="whycontent">
                <h3 className="MNMA">24 Hours</h3>
                <h5>Management Coverage</h5>
                <div className="whyflex">
                    <img src={whylogo1} alt="Management" className="whylogo1" />
                    <p>
                        We offer 24-hour coverage on community groups. We have Moderators from every Time-Zone needed
                        to achieve proper 24-hour community coverage. This directly increases effective management of
                        project groups and chats, in which we have one or two people covering chat at every hour of the
                        day handling FUDS, SPAMS and NEGATIVE TALKS.
                    </p>
                </div>
            </div>

            <div className="whycontent">
                <h3 className="MNMA">Fully Doxxed</h3>
                <h5>Moderators</h5>
                <div className="whyflex__twist">
                    <img src={whylogo2} alt="Fully Doxxed" className="whylogo2" />
                    <p>
                        All Moderators under our agency are doxxed with us: the agency has their details and information. So 
                        the problem of moderators collecting pay and running away without working is eradicated here. Also, interactions
                        aren't made with moderators directly: they are carried out through the Agency's representative for a particular
                        project.
                    </p>
                </div>
            </div>

            <div className="whycontent">
                <h3 className="MNMA">Versatility</h3>
                <div className="whyflex">
                    <img src={whylogo3} alt="Versatility" className="whylogo3"/>
                    <p>
                        All Moderators under our agency are doxxed with us: the agency has their details and information. So 
                        the problem of moderators collecting pay and running away without working is eradicated here. Also, interactions
                        aren't made with moderators directly: they are carried out through the Agency's representative for a particular
                        project.
                    </p>
                </div>
            </div>

            <div className="whycontent">
                <h3 className="MNMA">Trained Moderators</h3>
                <div className="whyflex__twist">
                    <img src={whylogo4} alt="Trained Moderators" className="whylogo4" />
                    <p>
                        Our moderators are equipped with the skills needed in managing groups and communities. Skills like Spam Bots Configurations,
                        proper set-up of pinned Messages and so on.
                        Skills needed in making the work smooth and effective are acquired by moderators.
                    </p>
                </div>
            </div>

            <div className="whycontent">
                <h3 className="MNMA">Community Focus</h3>
                <div className="whyflex">
                    <img src={whylogo5} alt="Community Focus" className="whylogo5" />
                    <p>
                        Our Moderators are specially trained with effective communication and managerial skills. We focus on community wants
                        and needs and always make sure their questions are replied immediately and their suggestions taken note of
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Whycomponent;
