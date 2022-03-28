import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actGetListPostAsync } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.listPost);

  useEffect(() => {
    dispatch(actGetListPostAsync({
      pageSize: 3,
      CurrentPage: 1
    }));
  }, [dispatch]);

  // console.log(posts);
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row">
          {posts.map((postItem) => {
            return (
              <div className="col-4">
                <div className="card" key={postItem.PID}>
                  <img src={postItem.profilepicture} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{postItem.fullname}</h5>
                    <p className="card-text">
                     {postItem.post_content}
                    </p>
                    <a href={`/post/` + postItem.PID} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
