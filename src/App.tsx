import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { I18nProvider } from "./i18n";
import { Dashboard } from "./pages";
import { store } from "./store/store";
import { GlobalStyle, theme } from "./styles";
import { Layout } from "./template";
import { routes } from "./utils/routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nProvider>
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
        </I18nProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
