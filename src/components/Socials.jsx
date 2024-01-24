import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <div className="socials">
      <span className="icon">
        <SocialIcon
          target="_blank"
          url="http://www.linkedin.com/in/justin-byrd7"
        />
      </span>
      <span className="icon">
        <SocialIcon target="_blank" url="http://www.github.com/jwbw29" />
      </span>
      <span className="icon">
        <SocialIcon target="_blank" url="http://www.facebook.com/justin.byrd" />
      </span>
      <span className="icon">
        <SocialIcon
          target="_blank"
          url="http://www.instagram.com/justin.byrd10"
        />
      </span>
      <span className="icon">
        <SocialIcon target="_blank" url="http://www.x.com/tweeter__byrd" />
      </span>
      <span className="icon">
        <SocialIcon target="_blank" url="http://www.youtube.com/jwbw29" />
      </span>
    </div>
  );
}
