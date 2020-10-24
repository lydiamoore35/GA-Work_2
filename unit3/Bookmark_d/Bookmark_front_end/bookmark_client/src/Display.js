import React from "react";

const Display = (props) => {
  const { bookmarks } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {bookmarks.map((bookmark) => (
        <article>
            <h2>{bookmark.title}</h2>
            <h2><a href = {bookmark.url}/></h2>
              <button
                onClick={() => {
                  props.selectBookmark(bookmark);
                  props.history.push("/edit");
                }}
                >Edit Bookmark</button>
                <button
                onClick={() => {
                  props.deleteBookmark(bookmark);
                }}
                >Delete Bookmark</button>
                
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;

  return bookmarks.length > 0 ? loaded() : loading;
};

export default Display;