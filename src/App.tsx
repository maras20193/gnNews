import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages";
import { GlobalStyle, theme } from "./styles";
import { Layout } from "./template";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
