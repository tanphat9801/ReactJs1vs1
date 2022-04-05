import "./login.css";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import LoginTitle from "../../components/AuthLogin/LoginTitle";
import {Link} from "react-router-dom"
const LoginPage = () => {
  return (
    <>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <LoginTitle logProps="Đăng nhập" />
              <div className="form-login-register">
                <form action>
                  <Input label="Tên tài khoản" placeholder="Nhập tên tài khoản..." />
                  <Input
                    type="password"
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                  />
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button type="primary" htmlType="submit" size="large">
                      Đăng nhập
                    </Button>
                    <Link to="/register">Bạn chưa có tài khoản?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing" />
      </main>
    </>
  );
};

export default LoginPage;
