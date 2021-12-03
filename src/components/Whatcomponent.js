import '../css/Whatcomponent.css';
import whatcard1 from "../images/whatcard1.svg";
import whatcard2 from "../images/whatcard2.svg";
import whatcard3 from "../images/whatcard3.svg";


function Whatcomponent() {
  return (
    <div className="What">
      <h5>What is <span className="MNMA">MNMA</span>?</h5>
      <p>
            Master Neo's Moderation Agency is a platform that deals in the managing and handling 
            of social apps and community's of crypto inclined Companies and projects. You've
            got a project and you need Mods for chat or Twitter handlers?, well search no more 
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
  );
}

export default Whatcomponent;
