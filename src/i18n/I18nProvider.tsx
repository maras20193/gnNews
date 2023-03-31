import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "../store/hooks";
import { LOCALES } from "./constants";
import { messages } from "./messages";

type ProviderProps = {
  children: React.ReactNode;
};

export const I18nProvider = ({ children }: ProviderProps) => {
  const language: string = useAppSelector((state) => state?.view?.language);
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={language}
      messages={messages[language]}
    >
      {children}
    </IntlProvider>
  );
};
