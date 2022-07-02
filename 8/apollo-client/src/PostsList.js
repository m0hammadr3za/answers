import { useQuery, gql } from "@apollo/client";
import PostSummary from "./PostSummary";

const POSTS_LIST = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        user {
          id
          username
        }
      }
    }
  }
`;

function PostsList() {
  const { loading, error, data } = useQuery(POSTS_LIST, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 10,
        },
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      {data.posts.data.map((post) => {
        return <PostSummary key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostsList;
