import { CountryLink } from "../../../../components";
import { countries } from "../../../../config";
import * as S from "./Navigation.styled";

export const Navigation = () => (
  <S.Wrapper>
    {countries.map((country) => (
      <CountryLink
        key={country.name}
        name={country.name}
        symbol={country.symbol}
      />
    ))}
  </S.Wrapper>
);
