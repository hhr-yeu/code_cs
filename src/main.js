import { createApp } from 'vue'
import App from './App.vue' //根组件

// ElementPlus导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import './assets/main.css'  //全局css样式

createApp(App).use(ElementPlus, { locale: zhCn }).mount('#app')
