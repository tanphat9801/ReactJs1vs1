import "./login.css";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import LoginTitle from "../../components/AuthLogin/LoginTitle";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <LoginTitle logProps="Đăng ký" />
              <div className="form-login-register">
                <form action>
                  <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập" />
                  <Input
                    type="password"
                    label="Tạo mật khẩu"
                    placeholder="Ít nhất 6 kí tự"
                  />
                  <Input
                    type="password"
                    label="Nhập lại mật khẩu"
                    placeholder="Mật khẩu"
                  />
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button type="primary" htmlType="submit" size="large">
                      Đăng Ký
                    </Button>
                    <Link to="/login">Bạn đã có tài khoản?</Link>
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

export default RegisterPage;
