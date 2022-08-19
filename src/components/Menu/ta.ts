import { MenuEntry } from '@fastswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'வீடு',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'வர்த்தகம்',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'பரிமாற்றம்',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'நீர்மை நிறை',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'பண்ணை V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'பண்ணை V4',
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
    label: 'தகவல்',
    icon: 'InfoIcon',
    items: [
      {
        label: 'கண்ணோட்டம்',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'டோக்கன்கள்',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'சோடிகள்',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'கணக்குகள்',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default config
