import { CountryLink } from "../../../../components";
import { countries } from "../../../../config";
import { useMediaQuery } from "../../../../hooks";
import { device } from "../../../../styles";
import * as S from "./Navigation.styled";

export const Navigation = () => {
  const isDesktop = useMediaQuery(device.tablet);
  return (
    <S.Wrapper isOpen={isDesktop}>
      <S.Nav>
        {countries.map((country) => (
          <CountryLink
            key={country.name}
            name={country.name}
            symbol={country.symbol}
            isFullSize={isDesktop}
          />
        ))}
      </S.Nav>
    </S.Wrapper>
  );
};
