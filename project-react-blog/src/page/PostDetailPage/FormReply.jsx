import "./css/post-detail.css";

const FormReply = () => {
  return (
    <>
      <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/">
              <img src="../../assets/images/avatar1.jpg" alt="" />
            </a>
          </div>
          <textarea name defaultValue={""} />
        </div>
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div>
    </>
  );
};

export default FormReply;
