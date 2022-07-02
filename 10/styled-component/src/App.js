import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./Container.styled";
import { GlobalStyles } from "./Global.styled";
import { Title } from "./Title.styled";
import { Button } from "./Button.styled";
import { Intro } from "./Intro.styled";

const lightMode = {
  backgroundColor: "#fff",
  textColor: "#000",
};

const darkMode = {
  backgroundColor: "#000",
  textColor: "#fff",
};

function App() {
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightMode : darkMode}>
      <GlobalStyles />

      <Container>
        <Intro>
          <Title>Styled Components</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Button onClick={handleClick}>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Intro>
      </Container>
    </ThemeProvider>
  );
}

export default App;
