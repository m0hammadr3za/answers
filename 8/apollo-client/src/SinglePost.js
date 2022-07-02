import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const SINGLE_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        id
        username
      }
    }
  }
`;

function SinglePost() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(SINGLE_POST, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <div>
        <h1>{data.post.title}</h1>
        <p>{data.post.user.username}</p>
      </div>

      <div>{data.post.body}</div>
    </div>
  );
}

export default SinglePost;
