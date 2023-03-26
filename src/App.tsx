import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages";
import { store } from "./store/store";
import { GlobalStyle, theme } from "./styles";
import { Layout } from "./template";
import { routes } from "./utils/routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={routes.dashboard} element={<Dashboard />} />
              <Route
                path={`${routes.country}/:countryName`}
                element={<Dashboard />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
