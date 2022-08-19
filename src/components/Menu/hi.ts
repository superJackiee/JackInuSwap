import { MenuEntry } from '@fastswap-uikit'

const hi: MenuEntry[] = [
  {
    label: 'घर',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'व्यापार',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'अदला बदली',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'लिक्विडिटी',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'फार्म V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'फार्म V4',
    icon: 'FarmIcon',
    href: '/farm',
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
    label: 'जानकारी',
    icon: 'InfoIcon',
    items: [
      {
        label: 'अवलोकन',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'टोकन',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'जोड़े',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'हिसाब किताब',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default hi
