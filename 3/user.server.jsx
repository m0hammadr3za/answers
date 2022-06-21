import { fetch } from "react-fetch";

const User = () => {
  const user = fetch("/api/user").json();

  return (
    <div>
      <h1>{user.username} </h1>
    </div>
  );
};

export default User;
