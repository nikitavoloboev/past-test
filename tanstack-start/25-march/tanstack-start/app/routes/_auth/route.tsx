import { Outlet, createFileRoute } from '@tanstack/react-router'
import { createContext, useContext, useState } from 'react'

type AppContextType = {
  someValue: string
  setSomeValue: (value: string) => void
}
export const AppContext = createContext<AppContextType | undefined>(undefined)

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}

function LayoutComponent() {
  const [someValue, setSomeValue] = useState('default value')
  return (
    <>
      <AppContext.Provider value={{ someValue, setSomeValue }}>
        <Outlet />
      </AppContext.Provider>
    </>
  )
}

export const Route = createFileRoute('/_auth')({
  component: LayoutComponent,
})
