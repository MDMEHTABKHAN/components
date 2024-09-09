import profilePic from "./assets/image.png";


function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Md Mehtab Khan</h2>
            <p className="card-text">With a solid background in contemporary programming languages and technologies, this entry-level software engineer is creative and results-driven. passionate about solving problems and well-equipped with practical expertise developing dynamic applications. devoted to lifelong learning and ready to build a cooperative team atmosphere. I'm ready to use my abilities to advance meaningful solutions and support the accomplishment of your tasks.</p>
        </div>
    );

    
}

export default Card