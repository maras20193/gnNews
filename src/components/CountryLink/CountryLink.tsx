import * as S from "./CountryLink.styled";

type CountryLinkProps = {
  name: string;
  symbol: string;
};

export const CountryLink = ({ name, symbol }: CountryLinkProps) => (
  <S.Wrapper>
    <img
      src={`https://flagsapi.com/${symbol}/shiny/32.png`}
      alt={`${name} flag`}
    />
    <p>{name}</p>
  </S.Wrapper>
);
