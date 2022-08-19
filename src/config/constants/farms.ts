import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isSpecial: 'no',
    lpSymbol: 'BNB-FAST LP',
    lpAddresses: {
      97: '',
      56: '0xbB609bd6179C6Ab5Ac9E73DB6661B0cfeD876C04',
    },
    tokenSymbol: QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.FAST,
    quoteTokenAdresses: contracts.fast,
    isCommunity: false,
  },
  {
    pid: 1,
    isSpecial: 'no',
    lpSymbol: 'DUKE-FAST LP',
    lpAddresses: {
      97: '',
      56: '0x30B2fC1bE9E646969d1568B4a5d49E090569123c',
    },
    tokenSymbol: QuoteToken.FAST,
    tokenAddresses: contracts.fast,
    quoteTokenSymbol: QuoteToken.DUKE,
    quoteTokenAdresses: contracts.duke,
    isCommunity: false,
  },
  {
    pid: 2,
    isSpecial: 'no',
    lpSymbol: 'BNB-FAST LP(PSC)',
    lpAddresses: {
      97: '',
      56: '0x3c50bEf8518f9eD98f9E0d66db3D2340421a3801',
    },
    tokenSymbol: QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.FAST,
    quoteTokenAdresses: contracts.fast,
    isCommunity: false,
  },
  {
    pid: 3,
    isSpecial: 'no',
    lpSymbol: 'BNB-DUKE LP(PSC)',
    lpAddresses: {
      97: '',
      56: '0xE545eaBdD3b07C68B0d0DF130A24B2dC4A10BE61',
    },
    tokenSymbol: QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.DUKE,
    quoteTokenAdresses: contracts.duke,
    isCommunity: false,
  },
  {
    pid: 4,
    isSpecial: 'no',
    lpSymbol: 'ETH-FAST LP',
    lpAddresses: {
      97: '',
      56: '0xEC72475fdf85473b347c963bba3f6b9c92424542',
    },
    tokenSymbol: QuoteToken.ETH,
    tokenAddresses: contracts.eth,
    quoteTokenSymbol: QuoteToken.FAST,
    quoteTokenAdresses: contracts.fast,
    isCommunity: false,
  },
  {
    pid: 5,
    isSpecial: 'no',
    lpSymbol: 'CAKE-FAST LP',
    lpAddresses: {
      97: '',
      56: '0x45994c0BC2E800d15489Ef8B4881fAE4535c0Cd3',
    },
    tokenSymbol: QuoteToken.CAKE,
    tokenAddresses: contracts.cake,
    quoteTokenSymbol: QuoteToken.FAST,
    quoteTokenAdresses: contracts.fast,
    isCommunity: false,
  },
  {
    pid: 6,
    isSpecial: 'no',
    lpSymbol: 'BUSD-FAST LP',
    lpAddresses: {
      97: '',
      56: '0xf3D11607C5Bd2929400aCda38A8e6fAb6C7F101C',
    },
    tokenSymbol: QuoteToken.BUSD,
    tokenAddresses: contracts.busd,
    quoteTokenSymbol: QuoteToken.FAST,
    quoteTokenAdresses: contracts.fast,
    isCommunity: false,
  },
  {
    pid: 7,
    isSpecial: 'no',
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol:  QuoteToken.BNB,
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
]

export default farms
