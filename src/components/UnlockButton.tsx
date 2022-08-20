import React from 'react'
import { Button, useWalletModal } from '@jackinu-uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  
  return (
    <Button onClick={onPresentConnectModal} {...props} style={{ backgroundColor: '#d2793d' }}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
