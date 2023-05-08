import { RxDashboard } from 'react-icons/rx';
import { MdInsights } from 'react-icons/md';
import { RiCouponLine } from 'react-icons/ri';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsFolder, BsWallet2 } from 'react-icons/bs';

export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    icon: <AiOutlineMessage />,
    text: 'Messages',
    link: '/messager',
  },
  {
    id: 3,
    icon: <RiCouponLine />,
    text: 'Groups',
    link: '/',
  },
  {
    id: 4,
    icon: <FiUser />,
    text: 'Team Member',
    link: '/',
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: 'Messages',
    link: '/',
  },
  {
    id: 6,
    icon: <BsFolder />,
    text: 'File Manager',
    link: '/',
  },
  {
    id: 7,
    icon: <BsWallet2 />,
    text: 'Wallet',
    link: '/',
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: 'Logout',
    link: '/',
  },
];
