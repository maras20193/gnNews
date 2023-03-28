import { NavLink } from "react-router-dom";
import { useMediaQuery } from "../../hooks";
import { device } from "../../styles";
import * as S from "./CountryLink.styled";

type CountryLinkProps = {
  name: string;
  symbol: string;
};

export const CountryLink = ({ name, symbol }: CountryLinkProps) => {
  const isDesktop = useMediaQuery(device.tablet);
  return (
    <S.Wrapper>
      <NavLink to={`/country/${symbol.toLowerCase()}`}>
        <img
          src={`https://flagsapi.com/${symbol}/shiny/32.png`}
          alt={`${name} flag`}
        />
        {isDesktop && <p>{name}</p>}
      </NavLink>
    </S.Wrapper>
  );
};
