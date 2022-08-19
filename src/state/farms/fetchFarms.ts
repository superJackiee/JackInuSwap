import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'

const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.filter(farm => farm.isSpecial === 'no').map(async (farmConfig) => {
        const lpAdress = getAddress(farmConfig?.lpAddresses)
        const calls = [
          // Balance of token in the LP contract
          {
            address: getAddress(farmConfig.tokenAddresses),
            name: 'balanceOf',
            params: [lpAdress],
          },
          // Balance of quote token on LP contract
          {
            address: getAddress(farmConfig.quoteTokenAdresses),
            name: 'balanceOf',
            params: [lpAdress],
          },
          // Balance of LP tokens in the master chef contract
          {
            address: lpAdress,
            name: 'balanceOf',
            params: [getMasterChefAddress()],
          },
          // Total supply of LP tokens
          {
            address: lpAdress,
            name: 'totalSupply',
          },
          // Token decimals
          {
            address: getAddress(farmConfig.tokenAddresses),
            name: 'decimals',
          },
          // Quote token decimals
          {
            address: getAddress(farmConfig.quoteTokenAdresses),
            name: 'decimals',
          },
        ]
  
        const [
          tokenBalanceLP,
          quoteTokenBlanceLP,
          lpTokenBalanceMC,
          lpTotalSupply,
          tokenDecimals,
          quoteTokenDecimals,
        ] = await multicall(erc20, calls)
  
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
  
        // Total value in staking in quote token value
        const lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(new BigNumber(2))
          .times(lpTokenRatio)
  
        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        const tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)
  
        const [info] = await multicall(masterchefABI, [
          {
            address: getMasterChefAddress(),
            name: 'poolInfo',
            params: [farmConfig.pid],
          },
        ])
  
        const stakingLP = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals))
        const totalLP = new BigNumber(lpTotalSupply).div(new BigNumber(10).pow(tokenDecimals))
        const totalWBNB = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(10).pow(quoteTokenDecimals))
        const lpPriceInWBNB = totalWBNB.times(2).div(totalLP)
  
        const totalLiquidityWithoutPrice = lpPriceInWBNB.times(stakingLP)
  
        const amountFastTokens = new BigNumber(info.amountFastTokens._hex).div(new BigNumber(10).pow(tokenDecimals))
        return {
          ...farmConfig,
          tokenAmount: tokenAmount.toJSON(),
          quoteTokenAmount: quoteTokenAmount.toJSON(),
          lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
          amountFastTokens: amountFastTokens.toJSON(),
          tokenPriceVsQuote: tokenAmount.div(quoteTokenAmount).toJSON(),
          totalLiquidityWithoutPrice: totalLiquidityWithoutPrice.toJSON(),
          multiplier: `1X`,
        }
    }),
  )
  return data
}

export default fetchFarms
