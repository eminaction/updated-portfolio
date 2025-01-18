import "./hero.css";

export default function Hero() {
  return (
    <div>
      <span className="colour-sections">
        <div className="blue-background">
          <h1 className="main-title">
            Frontend
            <br />
            Developer.
          </h1>
          <img className="profile-picture" src="/profile.png" />
        </div>
        <div className="green-background"></div>
      </span>
    </div>
  );
}
