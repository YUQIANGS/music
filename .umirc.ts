import { defineConfig } from 'umi';
const path = require('path');

export default defineConfig({
  dva: {
    immer: true,
    hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    components: path.resolve(__dirname, './src/components/'),
    pages: path.resolve(__dirname, './src/pages/'),
    assets: path.resolve(__dirname, './src/assets/'),
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
  
      routes: [
        {
          path: '/',
          redirect: 'index',
        },
        { 
          path: '/index', 
          component: '@/pages/index' 
        },
        {
          path: '/fa_xian_yin_yue',
          component: '@/pages/fa_xian_yin_yue'
        },
        {
          path: '/si_ren_fm',
          component: '@/pages/si_ren_fm'
        },
        {
          path: '/look_zhibo',
          component: '@/pages/look_zhibo'
        },
        {
          path: '/shi_pin',
          component: '@/pages/shi_pin'
        },
        {
          path: '/peng_you',
          component: '@/pages/peng_you'
        },
        {
          path: '/ben_di_yin_yue',
          component: '@/pages/ben_di_yin_yue'
        },
        {
          path: '/xia_zai_guan_li',
          component: '@/pages/xia_zai_guan_li'
        },
        {
          path: '/wo_xi_huan_de_yin_yue',
          component: '@/pages/wo_xi_huan_de_yin_yue'
        },
      ],
    }, 
  ],
  "proxy": {
    '/music': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/music': '' },
      changeOrigin: true
    }
  }
});
