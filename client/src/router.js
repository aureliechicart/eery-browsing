import {
  createRouter,
  createWebHistory
} from 'vue-router';

import HomePage from './pages/home/HomePage.vue';
import PaginationBrowse from './pages/pagination/PaginationBrowse.vue';
import InfiniteScroll from './pages/infinite/InfiniteScroll.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: HomePage
    },
    {
      path: '/pagination',
      component: PaginationBrowse
    },
    {
      path: '/infinite-scroll',
      component: InfiniteScroll
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    },
  ]
});

export default router;