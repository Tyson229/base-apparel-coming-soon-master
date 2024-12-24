import React from "react";

const Content: React.FC = () => {
  return (
    <div>
      <h1>
        <span>
          WE'RE
          <br />
        </span>
        COMING
        <br />
        SOON
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form>
        <input type="email" placeholder="youremail@email.com" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Content;
