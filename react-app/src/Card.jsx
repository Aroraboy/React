import ProfilePic from "./assets/certificate_fundoo.jpg";

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture"></img>
            <h2 className="card-title">Divyansh</h2>
            <p className="card-text">I am a developer</p>
        </div>
    );
}

export default Card