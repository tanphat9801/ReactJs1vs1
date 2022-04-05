import "./header.css";
import Input from "../../shared/Input/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const HeaderSearch = () => {

  const history = useHistory()
  const [queryStr, setQueryStr] = useState("");

  function handleOnchange(evt) {
    setQueryStr(evt.target.value);
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    if (!queryStr) {
      return;
    }
    const queryStrURI = encodeURIComponent(queryStr);

    history.push("/search?q=" + queryStrURI)
  }//encode xoa phan dau cach 

  return (
    <>
      <div className="tcl-col-4">
        <form onSubmit={handleOnSubmit}>
          <div className="header-search">
            <Input
              type="search"
              placeholder="Enter your search"
              value={queryStr}
              onChange={handleOnchange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HeaderSearch;
