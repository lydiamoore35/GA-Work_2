import React from "react";
import "./App.css";
import {Route, Link, Switch} from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {

  const url = "http://localhost:5500"
  const [bookmarks, setBookmarks] = React.useState([])
  
  const emptyBookmark = {
    title: "",
    url: "",
  };

  const [selectedBookmark, setSelectedBookmark] = React.useState(emptyBookmark);

  const getBookmarks = () => {
    fetch(url + "/bookmarks/")
      .then((response) => response.json())
      .then((data) => {
        setBookmarks(data);
      });
  };

  React.useEffect(() => getBookmarks(), []);

  const handleCreate = (newBookmark) => {
    fetch(url + "/bookmarks/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBookmark),
    }).then(() => {
      getBookmarks();
    });
  };
  
  const handleUpdate = (bookmark) => {
    fetch(url + "/bookmarks/" + bookmark._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    }).then(() => {
      getBookmarks();
    });
  };

  const selectBookmark = (bookmark) => {
    setSelectedBookmark(bookmark);
  }

  const deleteBookmark = (bookmark) => {
    fetch(url + "/bookmarks/" + bookmark._id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getBookmarks();
    });
  };
  

  return (
    <div className="App">
      <h1>Lydia's Bookmarks</h1>
      <hr />
      <Link to="/create">
        <button>Add Bookmark</button>
      </Link>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} />} bookmarks={bookmarks} 
          selectBookmark={selectBookmark}
          deleteBookmark={deleteBookmark}
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" bookmark={emptyBookmark} handleSubmit={handleCreate} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" bookmark={emptyBookmark} handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;