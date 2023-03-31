import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

   // CSS Reset to reduce browsers inconsistencies
   html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: "Verdana";
    overflow: hidden;
  }

  .modal {
    .ant-modal-content {
      background-color: ${({ theme }) => theme.colors.background.primary}
    }
    .ant-modal-header {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }
    .ant-modal-footer {
      display: none;
    }
    .ant-modal-title {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 14px;
    }
    .ant-modal-body {
      color: ${({ theme }) => theme.colors.text.primary};
    }
    .ant-modal-close-x {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  .myDropdown {
    .ant-dropdown-menu {
      background-color: ${({ theme }) => theme.colors.background.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      cursor: none;
      z-index: 100;
    }
  }
`;
