import { CountryLink } from "../../../../components";
import { countryData } from "../../../../data/countryData";
import * as S from "./Navigation.styled";

export const Navigation = () => (
  <S.Wrapper>
    <S.Nav>
      {countryData.map((country) => (
        <CountryLink
          key={country.name}
          name={country.name}
          symbol={country.symbol}
        />
      ))}
    </S.Nav>
  </S.Wrapper>
);
