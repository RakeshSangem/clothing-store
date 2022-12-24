// import SignUp from "../../components/signup-form/SignUp.component";
import SignUp from "../../components/signup-form/SignUp.component";
import SignIn from "../../components/signin-form/SignIn.component";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
