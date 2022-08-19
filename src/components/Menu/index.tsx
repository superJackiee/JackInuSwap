import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@fastswap-uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd } from 'state/hooks'
import config from './config'
import eses from './eses'
import ar from './ar'
import zhcn from './zhcn'
import zhtw from './zhtw'
import de from './de'
import nl from './nl'
import fil from './fil'
import fi from './fi'
import fr from './fr'
import el from './el'
import hi from './hi'
import hu from './hu'
import id from './id'
import it from './it'
import ja from './ja'
import ko from './ko'
import pt from './pt'
import ro from './ro'
import ru from './ru'
import sv from './sv'
import ta from './ta'
import tr from './tr'
import uk from './uk'
import vi from './vi'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  let links = config
  if(selectedLanguage.code === 'es-ES'){
    links = eses
  }else if(selectedLanguage.code === 'ar'){
    links = ar
  }else if(selectedLanguage.code === 'zh-CN'){
    links = zhcn
  }else if(selectedLanguage.code === 'zh-TW'){
    links = zhtw
  }else if(selectedLanguage.code === 'de'){
    links = de
  }else if(selectedLanguage.code === 'nl'){
    links = nl
  }else if(selectedLanguage.code === 'fil'){
    links = fil
  }else if(selectedLanguage.code === 'fi'){
    links = fi
  }else if(selectedLanguage.code === 'fr'){
    links = fr
  }else if(selectedLanguage.code === 'el'){
    links = el
  }else if(selectedLanguage.code === 'hi'){
    links = hi
  }else if(selectedLanguage.code === 'hu'){
    links = hu
  }else if(selectedLanguage.code === 'id'){
    links = id
  }else if(selectedLanguage.code === 'it'){
    links = it
  }else if(selectedLanguage.code === 'ja'){
    links = ja
  }else if(selectedLanguage.code === 'ko'){
    links = ko
  }else if(selectedLanguage.code === 'pt-BR'){
    links = pt
  }else if(selectedLanguage.code === 'ro'){
    links = ro
  }else if(selectedLanguage.code === 'ru'){
    links = ru
  }else if(selectedLanguage.code === 'sv-SE'){
    links = sv
  }else if(selectedLanguage.code === 'ta'){
    links = ta
  }else if(selectedLanguage.code === 'tr'){
    links = tr
  }else if(selectedLanguage.code === 'uk'){
    links = uk
  }else if(selectedLanguage.code === 'vi'){
    links = vi
  }
  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      // cakePriceUsd={cakePriceUsd.toNumber()}
      cakePriceUsd={undefined}
      links={links}
      {...props}
    />
  )
}

export default Menu
