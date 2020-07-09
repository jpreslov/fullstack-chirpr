import * as React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Compose: React.FC<ComposeProps> = () => {
    const history = useHistory()

    const [user, setUser] = useState<string>("");
    const [text, setText] = useState<string>("");
  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setUser(e.target.value);
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setText(e.target.value);
  
    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log({ user, text });
      let res = await fetch("/api/chirps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, text }),
      });
  
      if (res.ok) {
        history.push("/");
      } else {
        console.log("Something went wrong");
      }
    };
  
    return (
      <main className="container">
        <section className="row my-2 justify-content-center">
          <div className="col-md-8">
            <form className="form-group p-3 shadow border">
              <label htmlFor="user">User</label>
              <input
                value={user}
                onChange={handleUsernameChange}
                placeholder="Who are you?"
                id="user"
                type="text"
                className="form-control"
              />
              <label htmlFor="text">Text</label>
              <textarea
                value={text}
                onChange={handleTextChange}
                rows={8}
                placeholder="What's on your mind?"
                id="text"
                name="text"
                className="form-control"
              />
              <button
                onClick={submitChirp}
                className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow-sm"
              >
                Post Chirp
              </button>
            </form>
          </div>
        </section>
      </main>
    );
}

interface ComposeProps {}

export default Compose;