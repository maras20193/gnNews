import { NavLink } from "react-router-dom";
import * as S from "./CountryLink.styled";

type CountryLinkProps = {
  name: string;
  symbol: string;
  isFullSize?: boolean;
};

export const CountryLink = ({ name, symbol, isFullSize }: CountryLinkProps) => (
  <S.Wrapper>
    <NavLink to={`/country/${symbol.toLowerCase()}`}>
      <img
        src={`https://flagsapi.com/${symbol}/shiny/32.png`}
        alt={`${name} flag`}
      />
      {isFullSize && <p>{name}</p>}
    </NavLink>
  </S.Wrapper>
);
