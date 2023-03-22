import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import { Layout } from "./template";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <p>Place for news </p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
