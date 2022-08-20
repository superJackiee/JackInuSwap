import { MenuEntry } from '@jackinu-uikit'

const zhtw: MenuEntry[] = [
  {
    label: '\u9996\u9801',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: '\u4ea4\u6613',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: '\u514c\u63db',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: '\u6d41\u52d5\u6027',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'NewFarms V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: '\u8fb2\u5834',
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
    label: '信息',
    icon: 'InfoIcon',
    items: [
      {
        label: '\u6982\u89bd',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: '代幣',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: '\u4ee3\u5e63',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: '\u5e33\u6236',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default zhtw
