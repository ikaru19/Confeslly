import { Link, Form, redirect } from 'react-router-dom';
import { FaRegPaperPlane } from "react-icons/fa6";

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({ onAddPost }) {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="name">Someone you want to whisper to</label>
          <input 
            type="text" 
            name='author' 
            id="name" 
            required 
            placeholder="Enter the person's name here" 
          />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea 
            id="body" 
            name='body' 
            required 
            rows={5} 
            placeholder="Write your whispered message..." 
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type='button' className={classes.cancelButton}>
            Cancel
          </Link>
          <button type="submit" className={classes.submitButton}>
            <FaRegPaperPlane /> Submit
          </button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('https://menfes-backend.onrender.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}
