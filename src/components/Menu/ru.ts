import { MenuEntry } from '@fastswap-uikit'

const ru: MenuEntry[] = [
  {
    label: 'Дом',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Торговля',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Обмен',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Ликвидность',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'Ферма V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'Ферма V4',
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
    label: 'Информация',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Обзор',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Жетоны',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'Пары',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Yчетные записи',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default ru
