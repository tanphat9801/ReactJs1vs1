import "./login.css";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import LoginTitle from "../../components/AuthLogin/LoginTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateFormResigter } from "../../Helper";
import { useDispatch } from "react-redux";
import { actRegisterAsync } from "../../stores/Auth/action";
import { useHistory } from "react-router-dom";
import { useNotAuth } from "../../hooks/useNotAuth";
const RegisterPage = () => {
  // const [isDirty, setIsDirty] = useState(false); //ban dau khi nguoi dung chu nhap vao gi ca thi co gia tri false4
  useNotAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    nickname: { value: "", error: "", isTouched: false },
    username: { value: "", error: "", isTouched: false },
    email: { value: "", error: "", isTouched: false },
    password: { value: "", error: "", isTouched: false },
  });

  const handleOnchangeResigter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const error = validateFormResigter({ name, value });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
        isTouched: true,
      },
    });
  };

  const checkIsValid = () => {
    const newFormData = {};
    Object.keys(formData).forEach((key) => {
      const formValue = formData[key]; //{value, error, istouched: true/false}
      if (formValue.isTouched === false) {
        newFormData[key] = {
          value: "",
          error: validateFormResigter({ value: "", name: key }),
          isTouched: true,
        };
      } else {
        newFormData[key] = formData[key];
      } // bang false la khi nguoi dung chua cham vao form
      //neu gia tri bang true thi ko can phai set error ma se gan bang gia tri cu
    });
    setFormData(newFormData);
    console.log("newFormData", newFormData);

    if (
      newFormData.username.error ||
      newFormData.email.error ||
      newFormData.password.error
    ) {
      return false;
    }
    return true;
  }; //neu mot trong cac dk dung thi return false phu dinh lai isvalid thi se in ra loi

  const handleResigterSubmit = (event) => {
    event.preventDefault();

    const isValid = checkIsValid();

    if (!isValid || loading) {
      return;
    } // !isvalid chinh la phu dinh nguoc lai checkisvalid false thanh true

    setLoading(true);
    setFormError("");

    const actResigter = actRegisterAsync({
      nickname: formData.nickname.value,
      username: formData.username.value,
      email: formData.email.value,
      password: formData.password.value,
    });

    dispatch(actResigter).then((res) => {
      if (res.check) {
        history.push("/");
      } else {
        setFormError(res.error);
        setLoading(false);
      }
    });
  };

  return (
    <>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <LoginTitle logProps="Đăng ký" />
              <div className="form-login-register">
                {formError && <p className="form-login-error">{formError}</p>}
                <form autoComplete="off" onSubmit={handleResigterSubmit}>
                  <Input
                    label="Nickname"
                    placeholder="Nhập Nickname của bạn"
                    name="nickname"
                    value={formData.nickname.value}
                    onChange={handleOnchangeResigter}
                  />
                  <Input
                    label="Tên đăng nhập"
                    placeholder="Nhập tên đăng nhập"
                    name="username"
                    value={formData.username.value}
                    onChange={handleOnchangeResigter}
                    error={formData.username.error}
                  />
                  <Input
                    label="Email"
                    name="email"
                    value={formData.email.value}
                    onChange={handleOnchangeResigter}
                    error={formData.email.error}
                  />
                  <Input
                    type="password"
                    label="Nhập mật khẩu"
                    placeholder="Mật khẩu"
                    value={formData.password.value}
                    name="password"
                    onChange={handleOnchangeResigter}
                    error={formData.password.error}
                  />
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button
                      loading={loading}
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
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

// luu y
// o phan valid khi ko nhap bat cu gia tri nao dong nghia voi viec khi submit form se tra ve gia tri true
