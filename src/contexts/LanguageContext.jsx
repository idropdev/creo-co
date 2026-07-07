/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import es from '../i18n/es'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = lang === 'en' ? en : es

  const toggle = () => setLang(prev => prev === 'en' ? 'es' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
