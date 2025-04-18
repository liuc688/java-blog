import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '尚硅谷 Java',
  description: 'A VitePress Site',
  ignoreDeadLinks: true, // ✅ 禁用死链接检查
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '尚硅谷 Java', link: '/第01章_Java语言概述/第01章_Java语言概述' },
    ],

    sidebar: [
      {
        text: '尚硅谷 Java',
        items: [
          {
            text: '第01章_Java语言概述',
            link: '/第01章_Java语言概述/第01章_Java语言概述',
          },
          {
            text: '第02章_变量与运算符',
            link: '/第02章_变量与运算符/第02章_变量与运算符',
          },
          {
            text: '第03章_流程控制语句',
            link: '/第03章_流程控制语句/第03章_流程控制语句',
          },
          {
            text: '第04章_IDEA的安装与使用',
            items: [
              {
                text: '第04章_IDEA的安装与使用（上）',
                link: '/第04章_IDEA的安装与使用/第04章_IDEA的安装与使用（上）',
              },
              {
                text: '第04章_IDEA的安装与使用（下）',
                link: '/第04章_IDEA的安装与使用/第04章_IDEA的安装与使用（下）',
              },
              {
                text: 'IntelliJ IDEA 常用快捷键一览表',
                link: '/第04章_IDEA的安装与使用/IntelliJ IDEA 常用快捷键一览表',
              },
            ],
            collapsed: true,
          },
          { text: '第05章_数组', link: '/第05章_数组/第05章_数组' },
          {
            text: '第07章_面向对象编程（进阶）',
            link: '/第07章_面向对象编程（进阶）/第07章_面向对象编程（进阶）',
          },
          {
            text: '第08章_面向对象编程（高级）',
            link: '/第08章_面向对象编程（高级）/第08章_面向对象编程（高级）',
          },
          { text: '第09章_异常处理', link: '/第09章_异常处理/第09章_异常处理' },
          { text: '第10章_多线程', link: '/第10章_多线程/第10章_多线程' },
          {
            text: '第11章_常用类和基础API',
            link: '/第11章_常用类和基础API/第11章_常用类和基础API',
          },
          { text: '第12章_集合框架', link: '/第12章_集合框架/第12章_集合框架' },
          { text: '第13章_泛型', link: '/第13章_泛型/第13章_泛型' },
          {
            text: '第14章_数据结构与集合源码',
            link: '/第14章_数据结构与集合源码/第14章_数据结构与集合源码',
          },
          {
            text: '第15章_File类与IO流',
            link: '/第15章_File类与IO流/第15章_File类与IO流',
          },
          { text: '第16章_网络编程', link: '/第16章_网络编程/第16章_网络编程' },
          { text: '第17章_反射机制', link: '/第17章_反射机制/第17章_反射机制' },
          {
            text: '第18章_JDK8-17新特性',
            items: [
              {
                text: '第18章_JDK8-17新特性（上）',
                link: '/第18章_JDK8-17新特性/第18章_JDK8-17新特性（上）',
              },
              {
                text: '第18章_JDK8-17新特性（下）',
                link: '/第18章_JDK8-17新特性/第18章_JDK8-17新特性（下）',
              },
            ],
            collapsed: true,
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outline: {
      level: [2, 6],
      label: '🦋ON THIS PAGE',
    },
  },
});
