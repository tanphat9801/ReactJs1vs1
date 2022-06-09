import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function useNotAuth() {
  const history = useHistory();
  const isAutheticated = useSelector((state) => Boolean(state.Auth.token));
  //isAutheticated khi login roi se co gia tri bang true va nguoc lai
  useEffect(() => {
    if (isAutheticated) {
      history.push("/");
    } //isAutheticated có giá trị đồng nghĩa đã login rồi nên người dùng cố đăng nhập lại thì sẽ được chuyển sang hompage
  }, [isAutheticated, history]); //moi lan isAutheticated thay doi thi code ben trong useEffect se chay lai
}
