import { MenuEntry } from '@fastswap-uikit'

const id: MenuEntry[] = [
  {
    label: 'Rumah',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Perdagangan',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Bertukar',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Likuiditas',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'Peternakan V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'Peternakan V4',
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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Gambaran',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Tokens',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'Pasangan',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Akun',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default id
