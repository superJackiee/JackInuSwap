import { MenuEntry } from '@fastswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Liquidity',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: `${process.env.REACT_APP_MAIN_HOST}`,
  // },
  {
    label: 'NewFarms V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'NewFarms V4',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: `${process.env.REACT_APP_LOTTERY_HOST}`,
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Tokens',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'Pairs',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Accounts',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default config
