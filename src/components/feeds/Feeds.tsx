import Post from "../posts/Posts";
import Share from "../share/Share";
import "./feeds.scss";

export default function Feeds() {
  return (
    <div className="Feeds">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}
