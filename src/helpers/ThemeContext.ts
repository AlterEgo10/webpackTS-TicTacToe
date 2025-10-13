/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import React, { SetStateAction } from 'react'

export enum AppThemes{
  Light = 'light',
  Dark = 'dark',
}
export type ThemeContextValue = [
  AppThemes,
  (value:SetStateAction<AppThemes>) => void,
  (theme: AppThemes) => void,
  () => void,
]

export const ThemeContext = React.createContext<ThemeContextValue | null>(null)