export const BASE_URL = process.env.REACT_APP_BASE_URL;

// base_url=http://api-meme-zendvn-01.herokuapp.com/api

export const DEFAULT_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPAer2ilVW8b1pynyMFWdAVGWQWeDgLICig&usqp=CAU";

export const DATE_CREATE = "DD/MM/YYYY";
export const DATE_TEMPLATE_FULL = "DD/MM/YYYY HH:mm:ss";

export const ACCESS_TOKEN = "st";

export const MESSAGE_FORM_ERROR = {
  //backend error code
  existing_user_login: "Tên đăng nhập đã tồn tại",
  existing_user_email: "Email đã tồn tại",
  rest_user_invalid_password: "Mật khẩu không hợp lệ",
  rest_user_invalid_username: "Tên đăng nhập không hợp lệ",
  rest_user_invalid_email: "Email không hợp lệ",
  password_length: "Mật khẩu phải có ít nhất 6 kí tự",

  // frontend error code

  email_required: "Email không được rỗng",
  password_required: "Password không được rỗng",
  username_required: "Username không được rỗng",

  default: "Có lỗi xảy ra vui lòng thử lại",
};

export const ROUTER_POST = "/post/:slug";
