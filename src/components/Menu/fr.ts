import { MenuEntry } from '@fastswap-uikit'

const fr: MenuEntry[] = [
  {
    label: 'Domicile',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Échanger',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}`,
      },
      {
        label: 'Liquidité',
        href: `${process.env.REACT_APP_BASE_EXCHANGE_URL}/#/pool`,
      },
    ],
  },
  {
    label: 'Fermes V3',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_NEW_FARMSV3_HOST}`,
  },
  {
    label: 'Fermes V4',
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
        label: 'Aperçu',
        href: `${process.env.REACT_APP_INFO_HOST}`,
      },
      {
        label: 'Jetons',
        href: `${process.env.REACT_APP_INFO_HOST}/tokens`,
      },
      {
        label: 'Paires',
        href: `${process.env.REACT_APP_INFO_HOST}/pairs`,
      },
      {
        label: 'Comptes',
        href: `${process.env.REACT_APP_INFO_HOST}/accounts`,
      },
    ],
  },
]

export default fr
