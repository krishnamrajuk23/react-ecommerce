import Post from "../posts/Posts";
import Share from "../share/Share";
import "./feeds.scss";
import { Posts } from '../../dummyData';

export default function Feeds() {
  return (
    <div className="Feeds">
      <div className="feedWrapper">
        <Share />
        {Posts.map(post => <Post key={post.id} post={post} />)}
        
      </div>
    </div>
  );
}
