import React from "react";


const Display = (props) => {
  const { bookmarks } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {bookmarks.map((bookmark) => (
        <article>
            {/* <h2>{bookmark.title}</h2> */}
            <a href={bookmark.url} target="_blank"><h2>{bookmark.title}</h2></a>
              <button className="edit"
                onClick={() => {
                  props.selectBookmark(bookmark);
                  props.history.push("/edit");
                }}
                >Edit Bookmark</button>
                <button className="delete"
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