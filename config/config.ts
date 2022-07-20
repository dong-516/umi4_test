import { defineConfig } from "@umijs/max";


export default defineConfig({
    title:'umi_test',
    dva:{
      immer: {},
    },
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
      title: '@umijs/max',
    },
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        component: './Home',
      },
      {
        name: '权限演示',
        path: '/access',
        component: './Access',
      },
      {
          name: ' CRUD 示例',
          path: '/table',
          component: './Table',
      },
    ],
    npmClient: 'yarn',
    proxy:{
    }
})