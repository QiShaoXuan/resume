## 个人相关

- 姓名：齐少轩
- 毕业院校及专业：山西农业大学（2013.09 ~ 2017.06） - 信息与计算科学
- GitHub：https://github.com/QiShaoXuan
- 技术博客：https://qishaoxuan.github.io/css_tricks/
- 掘金主页：https://juejin.im/user/5b4b1f1c6fb9a04fa91bdf32/posts

## 联系方式

- 电话：18404984029
- 邮箱：474021214@qq.com

## 相关技能

- HTML，CSS，javascript，typescript
- jQuery，Vue.js，React.js 等前端库
- bootstrap，element，antd 等快速开发工具
- echart，mobileSelect，vuepress，better-scroll 等前端工具
- threejs，cesiumjs 等 3d 模型开发库

## 工作经历

- 2019-03 ~ 至今 - 京东集团-平台业务研发部-应用业务产品研发部（职级：T6）

- 2019-03 ~ 2019-11 - FinxOS

- 2017.03 ~ 2019.03 - 上海垓方网络科技有限公司


## 项目经验

### 京东(2019-03 ~ 至今)

1. **秒杀频道大促会场开发及日常活动迭代**

    作为秒杀频道h5开发一号位，负责大促会场等大流量业务场景开发及日常迭代

    **在日常业务开发外，主导完成了秒杀主会场的性能优化：**

    - 背景：秒杀会场存在首屏加载时间长，白屏时间久，滑动卡顿的问题
    - 分析：
      - 通过内部性能数据埋点平台，分析需要优化的方向（首屏加载时间）
      - chrome浏览器performance面板检查滑动页面卡顿原因：页面内存在多个自动播放的轮播组件，在滑动时自动播放的轮播组件导致页面元素回流，导致卡顿
    - 解决方案：
      - codereivew检查历史逻辑遗留，检查包的引入方式，减少构建后的包体积
      - 添加懒加载，首屏仅请求首屏需要的数据，其他数据在页面滑动到位后再次请求
      - 移除html中通过script引入的SDK，改为按需加载，动态引入
      - 滑动组件添加监听，仅在当前窗口中显示时才开始自动播放
      - 添加骨架屏
    - 成果
      - 包体积由407KB压缩至245KB，减少约39%
      - 加载速度由2224ms减少至11160ms，提升47%
   
2. **leo脚手架**
    
    一个的覆盖开发全链路，支持扩展、定制的前端脚手架工具
    
    - 背景：在新团队成立时内部需要一个脚手架工具，同时考虑到团队之间的脚手架、模板、开发标准互不相通，需要一个能解决此问题的脚手架工具，既减免各团队内脚手架维护的重复人效，也为新团队提供快速沉淀的能力。
    - 解决方案：
      分层设计 + 插件功能
    - 成果
      - 为公司内19个部门、64个团队采纳使用，被多个内部平台指定为官方脚手架，极大提高了开发效率
      - 社区版开源地址：https://github.com/JDFED/leo
      - 相关分享文章：
        - 掘金：https://juejin.cn/post/7049576737490862093
        - 京东零售技术：https://mp.weixin.qq.com/s/ZtbRho6MKKL1CYiCJpgpOg


### Finxos (2019-03 ~ 2019-11)
1. **Finxos CMS 平台**

   基于 React.js + gutenberg.js + echart.js + antd.js 搭建的管理系统，主要功能：支持金融机构编辑研报及各类图表，支持其发布为小程序，订阅号，移动端 H5 页面，并提供相应的访问权限，统计及定制化。其中主要负责报告相关部分的研发。

   1. 基于 gutenberg.js 搭建的富文本编辑器
      - 增加提纲，编辑历史等功能
      - 根据实际业务增加图表编辑，文件上传，列表等多个模块，并对已有模块进行优化。
      - 支持自定义样式地导出为便签（图片），word，发布至订阅号及小程序，同时负责 word，订阅号，小程序等各端解析。
   2. 数据搜索
         - 搜索界面动画设计与实现
         - 编写搜索补全提示组件
   3. 各个功能模块及页面实现
   
2. **秒图**

   微信小程序项目

   1. 配合 echart.js，支持自定义生成数据
   2. 配合管理系统解析 html 生成小程序页面
   3. 负责相关功能模块开发

### 垓方(2017.03 ~ 2019.03)

1. **gigacre官方平台**

   上海垓方网络科技官网，网站提供了入驻企业的多种展示，用户可以根据喜好物业进行对比，发起需求，相关客服根据需求进行反馈。

   - 技术栈
     jquery, sass, gulp, thinkphp5 模板系统

   - 职责
     - 编写 gulp 打包工具
     - 编写统一的 sass 文件，包括公共样式，动画等
     - 以 thinkphp5 模板系统在 html 页面进行数据嵌套
     - 编写模态框、下拉菜单、提示、分页器等 jquery 插件
     - 基于百度地图 API 编写地图扩展

   - 项目地址

     http://www.gigacre.com

2. **环保管家**

   松江环保项目。用于企业的环评数据录入及审核。

   - 技术栈

     vue，element

   - 职责

      - 大量表单录入的部分，使用 nodejs 处理 JSON 文件，实现自动翻译
      - 针对业务，基于 axios 二次封装
      - 封装表单，编写模态框，提示等公共组件
      - 组织 router，vuex 等文件

3. **美丽家园**

   泰晤士小镇物业智能管理系统。用于实时监控小区设备，重点单位等状态，展示车位信息，提供人员预警，车辆预警等。

   - 技术栈

     vue, cesiumjs

   - 职责
     - 在 vue 中接入 cesiumjs，并基于 cesiumjs 二次封装，添加坐标点，飞行动画，测量工具等插件。
     - 使用 ckplayer 接入监控视频流，实现视频监控实时预览。
     - 编写拖拽工具，实现多窗口监控预览

4. **资管平台**

   该项目为物流园物业管理系统，兼容于 PC，移动端及微信公众号，项目中包括工单创建、处理，设备录入，视频监控，权限分级等。

   - 技术栈

     jquery, sass, bootstrap，gulp, thinkphp3 模板语法

   - 职责
     - 编写 gulp 打包工具
     - 以 thinkphp3 模板语法在 html 页面进行数据嵌套
     - 编写树状图、自定义表单等 jquery 插件
     - videojs 引入监控视频流

5.  **全景编辑器**

   公司内部使用的全景编辑器，基于 kropano 提供的接口，实现对全景图片的视角，热点，沙盘，场景等内容的编辑。

   - 技术栈

     jquery, krpano

   - 职责
     - 编写操作界面，优化操作流程
     - 基于 kropano 提供的接口，实现沙盘，热点，视角等全景编辑方式。

## 个人项目及作品

- [CSS Tricks](https://qishaoxuan.github.io/css_tricks/)
  常用 CSS 总结

- [JS Tricks](https://qishaoxuan.github.io/js_tricks/)
  常用 JS 方法总结

- [Blog](https://qishaoxuan.github.io/blog/)
  日常学习记录

- [wavejs](https://github.com/QiShaoXuan/wavejs)
  一个灵活的可配置的波浪动画

- [Animate resume](https://github.com/QiShaoXuan/animate_resume_ts)
  typescript 编写的动态简历

- [别踩白块](https://github.com/QiShaoXuan/dont-touch-white)
  原生 JS 编写的别踩白块游戏

- [俄罗斯方块](https://github.com/QiShaoXuan/vue_tetris)
  使用 vue 及 vuex 编写的俄罗斯方块游戏

- [all list](https://github.com/QiShaoXuan/qishaoxuan.github.io)
  平常无聊写的东西

### 更多项目请移步[GitHub](https://github.com/QiShaoXuan)

基于 gutenberg.js 的富文本编辑器的集成，扩展。支持小程序，移动端等文本编辑内容解析展示，支持导出 word，便签等格式

在 PC，小程序，移动端完成前端基本开发：页面实现，交互优化，公共模块开发。
