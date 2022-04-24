import "./login.css";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import LoginTitle from "../../components/AuthLogin/LoginTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateFormData } from "../../Helper";
import { actAuthLoginAsync } from "../../stores/Auth/action";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(true);
  const [formData, setFormData] = useState({
    username: {
      value: "congluc1902",
      error: "",
    },
    password: {
      value: "123456",
      error: "",
    },
  });

  const handleChangeValue = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    const error = validateFormData({ value, name });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });

    setIsDirty(true);
  };

  const checkIsValid = () => {
    if (!isDirty) {
      setFormData({
        username: {
          value: "",
          error: validateFormData({
            value: "",
            name: "username",
          }),
        },
        password: {
          value: "",
          error: validateFormData({
            value: "",
            name: "password",
          }),
        },
      });
      return false;
    }

    if (formData.username.error || formData.password.error) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = checkIsValid();
    if (!isValid) {
      return;
    }

    const { username, password } = formData;

    if (loading) {
      return;
    }
    setLoading(true);
    setFormError("");

    dispatch(actAuthLoginAsync(username.value, password.value)).then((res) => {
      if (res.check) {
        history.push("/");
      } else {
        console.log("that bai", res.error);
        setFormError(res.error);
      }

      setLoading(false);
    });
  };

  return (
    <>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <LoginTitle logProps="Đăng nhập" />
              <div className="form-login-register">
                {formError && <p className="form-login-error">{formError}</p>}
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <Input
                    label="Tên tài khoản"
                    placeholder="Nhập tên tài khoản..."
                    value={formData.username.value}
                    error={formData.username.error}
                    onChange={handleChangeValue}
                    name="username"
                  />
                  <Input
                    type="password"
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    value={formData.password.value}
                    error={formData.password.error}
                    onChange={handleChangeValue}
                    name="password"
                  />
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button
                      loading={loading}
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
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
