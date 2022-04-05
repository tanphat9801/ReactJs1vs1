import "./login.css";
import Input from "./Input";
const Login = () => {
  return (
    <>
      <div className="tcl-container">
        <div className="tcl-col-4">
          <>
            <Input label="username" placeholder="enter username"/>
            <Input type="password" label="password" placeholder="enter your password"/>
            <Input label="search" type="search" placeholder="enter search" className="hello"/>
          </>
        </div>
      </div>
    </>
  );
};

export default Login;
