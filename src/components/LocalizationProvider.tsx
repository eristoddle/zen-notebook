import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useMemo, useState } from 'react';
import LocalizedStrings from 'react-native-localization';
import * as RNLocalize from 'react-native-localize';
import * as en from '../translations/en.json';

interface Props {
  children: React.ReactNode;
}

const DEFAULT_LANGUAGE = 'en';
const APP_LANGUAGE = 'appLanguage';

const languages = { en };

export const translations = new LocalizedStrings(languages);

export const LocalizationContext = createContext<any | undefined>(undefined);

export const LocalizationProvider = ({ children }: Props): any => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language: string): void => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async (): Promise<void> => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (currentLanguage) {
      setLanguage(currentLanguage);
    } else {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale: { languageCode: any }) => locale.languageCode,
      );
      phoneLocaleCodes.some((code: string): boolean => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
        return false;
      });
      setLanguage(localeCode);
    }
  };

  const value = useMemo(() => { return {
      translations,
      setAppLanguage: setLanguage,
      appLanguage,
      initializeAppLanguage,
    };
  }, []);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
