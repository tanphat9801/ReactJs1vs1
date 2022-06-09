import Button from "../../shared/Button/Button";

export const PageNotFound = () => {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-3">
            <img
              src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg "
              width={200}
              height={200}
              alt="pagenotfound"
            />
          </div>

          <div className="tcl-col-6">
            <h2>Truy cập của bạn bị lỗi hoặc không tìm thấy nội dung</h2>
            <Button ab="a" href="/">
              Quay lại trang chủ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};