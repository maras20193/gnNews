import { Footer, Header, Navigation } from "./components";
import * as S from "./Layout.styled";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Header />
    <S.MainWrapper>
      <Navigation />
      <S.Content>{children}</S.Content>
    </S.MainWrapper>
    <Footer />
  </S.Wrapper>
);
