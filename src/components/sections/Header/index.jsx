// import logo from "../../../assets/images/Logo.png";
import { Button } from "../../ui/Button";
import Icons from "../../../assets/images/icons.svg";

export const Header = () => {
  return (
    <header>
      <div>
        <svg>
          <use href={`${Icons}#Logo-1`} />
        </svg>
      </div>
      <nav>
        <Button id="users">Users</Button>
        <Button id="sign-up">Sign up</Button>
      </nav>
    </header>
  );
};
