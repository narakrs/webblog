import { AdminHomePage, TaskBoardPage } from './../index';

export const ADMIN_ROUTES = [
  {
    icon: 'fa fa-bell-slash',
    path: '/admin/table',
    name: 'Quản lý table',
    exact: true,
    component: AdminHomePage,
  },
  {
    icon: 'fa fa-bank',
    path: '/admin/contact',
    name: 'Quản lý contact',
    exact: true,
    component: TaskBoardPage,
  },
  {
    icon: 'fa fa-bomb',
    path: '/admin/frontend',
    name: 'Quản lý web',
    exact: true,
    component: AdminHomePage,
  },
];
export const CONTACT_ROUTES = [
  {
    icon: 'fa fa-facebook-square',
    path: 'https://www.facebook.com/watch/daybetapve',
    name: '',
    alt: 'facebook',
    exact: true,
  },
  {
    icon: 'fa fa-instagram',
    path: 'https://shopee.vn',
    name: '',
    alt: 'instagram',
    exact: true,
  },
];
export const AUTHENTYCATION_ROUTES = [
  {
    icon: 'fa fa-sign-in',
    path: '/',
    name: 'Đăng nhập',
    exact: true,
    component: AdminHomePage,
  },
  {
    icon: 'fa fa-sign-out',
    path: '/signup',
    name: 'Đăng ký',
    exact: true,
    component: TaskBoardPage,
  },
];
export const ADMIN_LINK = [
  {
    to: '/admin',
    name: 'Trang Quản Trị',
  },
  {
    to: '/home/promotion',
    name: 'Khuyến mãi',
  },
];
