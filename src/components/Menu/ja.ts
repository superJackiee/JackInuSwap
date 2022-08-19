import { MenuEntry } from '@fastswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'ホームホーム',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'トレード',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: '両替',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: '流動性',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: '農場 V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: '農場 V4',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: 'NewFarms',
  //   icon: 'FarmIcon',
  //   href: `${process.env.REACT_APP_NEW_FARMS_HOST}/newfarms`,
  // },
  // {
  //   label: 'NewFarms V2',
  //   icon: 'FarmIcon',
  //   href: `${process.env.REACT_APP_NEW_FARMSV2_HOST}`,
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: `${process.env.REACT_APP_LOTTERY_HOST}`,
  },
  {
    label: '情報',
    icon: 'InfoIcon',
    items: [
      {
        label: '概要概要',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'トークン',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'ペア',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'アカウント',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default config
