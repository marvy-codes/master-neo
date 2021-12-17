import '../css/Whatcomponent.css';
import whatcard1 from "../images/whatcard1.svg";
import whatcard2 from "../images/whatcard2.svg";
import whatcard3 from "../images/whatcard3.svg";
import telegramicon from "../images/telegramicon.png";
import discordicon from "../images/discordicon.png";
import twittericon from "../images/twittericon.png";
import abouticon from "../images/Abouticon.svg";


function Whatcomponent() {
  return (
    <div>
      <div className="what">
        <div className="what__desktop1">
            <h5>What is <span className="MNMA">MNMA</span>?</h5>
            <p>
                  Master Neo's Moderation Agency is a platform that deals in the managing and handling 
                  of social apps and the community of crypto inclined Companies and projects. You've
                  got a project and you need Mods for a chat or Twitter handlers? Well search no more 
                  cause you're in the right place. We offer various managerial services, such as:
            </p>
            <div className="whatcards">
                  <div className="whatcard">
                      <img src={whatcard1} alt="Fully Doxxed Moderation" className="whatcard1" />
                      <div className="whatglowDot"></div>
                  </div>
                  <div className="whatcard">
                      <img src={whatcard2} alt="Multi App Management" className="whatcard2" />
                      <div className="whatglowDot"></div>
                  </div>
                  <div className="whatcard">
                      <img src={whatcard3} alt="community Focus" className="whatcard3" />
                      <div className="whatglowDot"></div>
                  </div>
            </div>
        </div>
        
        <div className="what__desktop2">
              <div className="whatimage">
                <img src={telegramicon} alt="telegram" className="whatimage__telegram" />
                <img src={twittericon} alt="twtter" className="whatimage__twitter" />
                <img src={discordicon} alt="discord"  className="whatimage__discord" />
              </div>
        </div>
      </div>

      <div className="about__desktop">
        <div className="about" id="aboutus">
            <div className="about__desktop1">
              <h5>About <span className="MNMA">MNMA</span></h5>
                <p>
                  Master Neo's Moderation Agency is fully sustainable and efficient Moderation provision
                  service that gives Project owners and Developers confidence and peace of mind knowing
                  that their communities and social Accounts are properly and efficiently managed free 
                  from spammers fudders and negative individuals.
                </p>
                <p>
                  MNMA is a revolutionary approach to the management Space that matches all your needs with
                  an all-in-one-robust, easy-to-apply platform.
                </p>
                <p>
                  We offer 24-hour coverage on community groups. We have Moderators from every Time-Zone needed
                  to achieve proper 24-hour community coverage. This directly increases effective management of
                  project groups and chats, in which we have one or two people covering chat at every hour of the
                  day handling FUDS, SPAMS and NEGATIVE TALKS.
                </p>
            </div>
            <div className="about__desktop2">
              <div className="aboutimage">
                <img src={abouticon} alt="about description" className="abouticon" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Whatcomponent;
