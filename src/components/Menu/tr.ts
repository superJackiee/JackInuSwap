import { MenuEntry } from '@jackinu-uikit'

const tr: MenuEntry[] = [
  {
    label: 'Ev',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Ticaret',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Değiş tokuş',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Likidite',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'Çiftlik V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'Çiftlik V4',
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
    label: 'Bilgi',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Genel bakış',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Jetonlar',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'çiftler',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Hesaplar',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default tr
