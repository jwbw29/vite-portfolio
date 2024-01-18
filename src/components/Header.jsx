import logo from "../assets/jb-logo.png";

export default function Header() {
  const emailAddress = "hi@justin-byrd.com";
  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="header">
      {" "}
      <img src={logo} alt="logo" className="logo" />
      <button className="email-button" onClick={handleButtonClick}>
        Contact Me
      </button>
    </div>
  );
}
