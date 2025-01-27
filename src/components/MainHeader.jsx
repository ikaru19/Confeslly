import { Link } from 'react-router-dom';
import { MdPostAdd } from 'react-icons/md';
import { RiEyeCloseFill } from "react-icons/ri";
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.logo}>
          <Link to="/" aria-label="Go to homepage">
            <RiEyeCloseFill />
            Confessly
          </Link>
        </h1>
        <p className={classes.subtitle}>For thoughts shared like a whisper</p>
      </div>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={24} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
