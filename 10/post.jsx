import { styled } from "styled-component";

const Button = styled.button`
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  ${props.small &&
  css`
    font-size: 12px;
  `}
`;

const Post = () => {
  return (
    <div>
      <h1>My post!</h1>

      <Button small>Delete!</Button>
    </div>
  );
};

export default Post;
