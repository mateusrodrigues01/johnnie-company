const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'google-ads', component: () => import('pages/GoogleAds.vue') },
      { path: 'meta-ads', component: () => import('pages/MetaAds.vue') },
      { path: 'develop-web', component: () => import('pages/DevelopWeb.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
