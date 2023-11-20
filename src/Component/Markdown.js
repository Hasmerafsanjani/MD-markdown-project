import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markdown, setMarkDown] = useState("Markdown file");
  return (
    <>
      <div className="center-div">
        <div className="writer">    
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}>
          </textarea>
              </div>
        <div>
      
        <div className="right-side">
            <p>PREVIEW</p>
          <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
        </div>
        </div>
      </div>
    </>
  );
};

export default Markdown;