import React, { useState, useEffect } from 'react'
import { TranslationsContext } from 'contexts/Localisation/translationsContext'
import { allLanguages, EN } from 'config/localisation/languageCodes'
import langSrc from '../../config/localisation/translate'

const CACHE_KEY = 'pancakeSwapLanguage'

export interface LangType {
  code: string
  language: string
}

export interface LanguageState {
  selectedLanguage: LangType
  setSelectedLanguage: (langObject: LangType) => void
  translatedLanguage: LangType
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<LangType>>
}

const LanguageContext = React.createContext({
  selectedLanguage: EN,
  setSelectedLanguage: () => undefined,
  translatedLanguage: EN,
  setTranslatedLanguage: () => undefined,
} as LanguageState)

const getLang = (selectedLanguage) => {
  return langSrc[selectedLanguage.code] ? langSrc[selectedLanguage.code].src : []
}

const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(EN)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(EN)
  const [translations, setTranslations] = useState<Array<any>>([])

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem(CACHE_KEY)
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  useEffect(() => {
    if (selectedLanguage) {
      setTranslations(getLang(selectedLanguage))
      setTranslatedLanguage(selectedLanguage)
    }
  }, [selectedLanguage, setTranslations])

  const handleLanguageSelect = (langObject: LangType) => {
    setSelectedLanguage(langObject)
    localStorage.setItem(CACHE_KEY, langObject.code)
  }

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage: handleLanguageSelect, translatedLanguage, setTranslatedLanguage }}
    >
      <TranslationsContext.Provider value={{ translations, setTranslations }}>{children}</TranslationsContext.Provider>
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageContextProvider }
