import { MenuEntry } from '@fastswap-uikit'

const fi: MenuEntry[] = [
  {
    label: 'Koti',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Käydä kauppaa',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Vaihto',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Likviditeetti',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'Maatilat V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'Maatilat V4',
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
    label: 'Tiedot',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Yleiskatsaus',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Tunnukset',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'Parit',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Tilit',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default fi
