import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { CalculateIcon, IconButton, useModal } from '@jackinu-uikit'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  addLiquidityUrl?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, cakePrice, apy, addLiquidityUrl }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal lpLabel={lpLabel} cakePrice={cakePrice} apy={apy} addLiquidityUrl={addLiquidityUrl} />,
  )
  
  return (
    <IconButton onClick={onPresentApyModal} variant="text" size="sm" ml="4px">
      <CalculateIcon style={{color:'white', backgroundColor:'white'}} />
    </IconButton>
    
  )
}

export default ApyButton
