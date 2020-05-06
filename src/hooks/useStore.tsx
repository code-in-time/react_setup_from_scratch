import React from 'react'
import { storesContext } from '../stores/context'

// This will return the store a s a custom hook
export const useStores = () => React.useContext(storesContext)