import { MenuEntry } from '@jackinu-uikit'

const ko: MenuEntry[] = [
  {
    label: '집',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: '무역',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: '교환',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: '유동성',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: '농장 V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: '농장 V4',
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
    label: '정보',
    icon: 'InfoIcon',
    items: [
      {
        label: '개요',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: '토큰',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: '쌍',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: '계정',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default ko
