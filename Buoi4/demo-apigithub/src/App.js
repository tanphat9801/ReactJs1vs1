import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actGetListPostAsync } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.listPost);

  useEffect(() => {
    dispatch(actGetListPostAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
              <th scope="col">Node_id</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((postItems) => {
              return (
                <tr key={postItems.node_id}>
                  <th scope="row">{postItems.id}</th>
                  <td>{postItems.login}</td>
                  <td>
                    <img
                      src={postItems.avatar_url}
                      style={{ width: "3rem", height: "3rem" }}
                      alt="..."
                    />
                  </td>
                  <td>{postItems.node_id}</td>
                  <td>{postItems.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
