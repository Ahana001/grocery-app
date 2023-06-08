import "./ErrorPage.css";

import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <div className="NotFoundPage">
        <div className="NotFoundPageImageContainer">
          <img src="../images/no_search_result.webp" alt="not found page" />
        </div>
        <div className="NotFoundPageTextContainer">
          <div> Oops!</div>
          The page you are looking for can&#39;t be found.
          <Link to="/" className="NotFoundPageLink">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}
