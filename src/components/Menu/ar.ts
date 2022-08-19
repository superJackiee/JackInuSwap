import { MenuEntry } from '@fastswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'منزل، بيت',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'تجارة',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'تبادل',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'السيولة',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'مزارع V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'مزارع V4',
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
    label: 'معلومات',
    icon: 'InfoIcon',
    items: [
      {
        label: 'ملخص',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'الرموز',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'أزواج',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'حساب',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default config
