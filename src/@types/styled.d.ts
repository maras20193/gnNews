import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        primaryLight: string;
        secondary: string;
      };
      text: {
        primary: string;
        disabled: string;
        secondary: string;
      };
      primary: string;
      primaryHover: string;
    };
  }
}
