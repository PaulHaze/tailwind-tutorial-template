import { Home, Test, TestTwo } from './views';

export const routes = [
  {
    path: '/home',
    key: 'home',
    label: 'Home',
    component: Home,
  },
  {
    path: '/test',
    key: 'test',
    label: 'Test',
    component: Test,
  },
  {
    path: '/testTwo',
    key: 'testTwo',
    label: 'TestTwo',
    component: TestTwo,
  },
];
