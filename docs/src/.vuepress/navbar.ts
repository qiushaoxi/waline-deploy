import { navbar } from 'vuepress-theme-hope';

export const zhNavbarConfig = navbar([
  '/guide/get-started/',
  '/cookbook/',
  {
    text: '迁移',
    icon: 'migration',
    prefix: '/migration/',
    children: ['client', 'valine', 'tool'],
  },
  {
    text: '参考',
    icon: 'reference',
    prefix: '/reference/',
    children: [
      {
        text: '客户端',
        prefix: 'client/',
        children: ['api', 'props', 'file', 'style'],
      },
      {
        text: '服务端',
        prefix: 'server/',
        children: ['api', 'config', 'env'],
      },
    ],
  },
  {
    text: '高级',
    icon: 'advanced',
    prefix: '/advanced/',
    children: ['intro', 'design', 'ecosystem', 'faq', 'contribution'],
  },
]);

export const enNavbarConfig = navbar([
  '/en/guide/get-started/',
  '/en/cookbook/',
  {
    text: 'Migration',
    icon: 'migration',
    prefix: '/en/migration/',
    children: ['client', 'valine', 'tool'],
  },
  {
    text: 'Reference',
    icon: 'reference',
    prefix: '/en/reference/',
    children: [
      {
        text: 'Client',
        prefix: 'client/',
        children: ['api', 'props', 'file', 'style'],
      },
      {
        text: 'server',
        prefix: 'server/',
        children: ['api', 'config', 'env'],
      },
    ],
  },
  {
    text: 'Advanced',
    icon: 'advanced',
    prefix: '/en/advanced/',
    children: ['intro', 'design', 'ecosystem', 'faq', 'contribution'],
  },
]);
