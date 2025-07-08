# 广西云南环线自驾游智能旅游助手

一个功能完整的旅游网站，专为16天广西云南环线自驾游设计，提供实时天气、路况、行程管理、景点推荐、住宿预订、社区互动和应急信息等全方位服务。

## 🌟 主要功能

### 📱 实时信息
- **实时天气**：多城市天气信息，包含温度、湿度、风速等详细数据
- **路况导航**：实时路况信息，路线规划和导航服务
- **行程倒计时**：精确到分钟的出发倒计时
- **自动推送**：行程须知和应急消息自动推送

### 🗺️ 行程管理
- **路线展示**：交互式地图显示完整行程路线
- **费用预估**：详细的费用预算和油费计算
- **车辆信息**：车辆注意事项和保养提醒
- **时间线**：每日行程安排和景点介绍

### 🏞️ 景点服务
- **景点展示**：详细的景点信息和图片
- **购票预约**：在线购票和预约服务
- **实时信息**：景点人流量和等待时间
- **搜索筛选**：按城市、评分、价格筛选

### 🏨 住宿服务
- **酒店推荐**：精选酒店推荐和详细信息
- **在线预订**：酒店预订和房间选择
- **价格筛选**：按预算和星级筛选
- **实时房态**：房间可用性和价格更新

### 💬 社区互动
- **论坛发帖**：分享旅行经验和攻略
- **留言互动**：评论、点赞和分享功能
- **热门帖子**：热门内容推荐
- **搜索功能**：帖子搜索和分类浏览

### 🚨 应急服务
- **应急联系**：各地应急联系方式
- **车辆注意**：详细的车辆注意事项
- **应急报告**：紧急情况报告功能
- **实时预警**：天气和路况预警

## 🛠️ 技术架构

### 后端技术栈
- **Node.js** + **Express**：服务器框架
- **Socket.IO**：实时通信
- **MongoDB**：数据存储
- **Redis**：缓存和会话管理
- **JWT**：用户认证
- **Cron**：定时任务

### 前端技术栈
- **HTML5** + **CSS3** + **JavaScript**：基础技术
- **Leaflet**：地图展示
- **Chart.js**：数据可视化
- **Socket.IO Client**：实时通信
- **Font Awesome**：图标库

### 第三方API集成
- **天气API**：实时天气数据
- **高德地图API**：地图和导航服务
- **景点门票API**：购票服务
- **酒店预订API**：住宿预订

## 📁 项目结构

```
旅游/
├── frontend/                 # 前端应用
│   ├── index.html           # 主页面
│   ├── styles.css           # 样式文件
│   ├── app.js              # 应用逻辑
│   └── package.json        # 前端依赖
├── backend/                 # 后端API
│   ├── server.js           # 服务器入口
│   ├── routes/             # 路由文件
│   │   ├── weather.js      # 天气API
│   │   ├── traffic.js      # 路况API
│   │   ├── trip.js         # 行程API
│   │   ├── attractions.js  # 景点API
│   │   ├── hotels.js       # 酒店API
│   │   ├── emergency.js    # 应急API
│   │   ├── forum.js        # 论坛API
│   │   └── notifications.js # 通知API
│   ├── services/           # 服务层
│   ├── models/             # 数据模型
│   ├── utils/              # 工具函数
│   ├── config.env          # 环境配置
│   └── package.json        # 后端依赖
└── README.md               # 项目说明
```

## 🚀 快速开始

### 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0
- Python 3.x (用于前端开发服务器)

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd 旅游
```

2. **安装后端依赖**
```bash
cd backend
npm install
```

3. **配置环境变量**
```bash
# 复制配置文件
cp config.env .env

# 编辑 .env 文件，填入您的API密钥
# 天气API、高德地图API等
```

4. **启动后端服务**
```bash
npm start
# 或开发模式
npm run dev
```

5. **安装前端依赖**
```bash
cd ../frontend
npm install
```

6. **启动前端服务**
```bash
# 使用Python简单服务器
python -m http.server 8000

# 或使用Node.js服务器
npx http-server -p 8000
```

7. **访问应用**
打开浏览器访问：`http://localhost:8000`

## 🔧 配置说明

### 环境变量配置
在 `backend/.env` 文件中配置以下变量：

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/travel_app
REDIS_URL=redis://localhost:6379

# 天气API配置
WEATHER_API_KEY=your_weather_api_key
WEATHER_BASE_URL=https://api.weatherapi.com/v1

# 高德地图API配置
AMAP_API_KEY=your_amap_api_key
AMAP_BASE_URL=https://restapi.amap.com/v3

# 其他API配置...
```

### API密钥获取
1. **天气API**：注册 [WeatherAPI](https://www.weatherapi.com/)
2. **高德地图API**：注册 [高德开放平台](https://lbs.amap.com/)
3. **其他服务**：根据需要注册相应服务

## 📱 功能演示

### 首页
- 行程倒计时显示
- 图片轮播展示
- 统计数据展示

### 天气模块
- 多城市实时天气
- 天气预报信息
- 天气预警提醒

### 路况导航
- 交互式地图
- 路线规划功能
- 实时路况信息

### 行程管理
- 详细行程时间线
- 费用预算统计
- 车辆信息管理

### 景点推荐
- 景点信息展示
- 购票预约功能
- 搜索筛选功能

### 住宿服务
- 酒店推荐列表
- 在线预订功能
- 价格筛选功能

### 社区论坛
- 发帖分享功能
- 评论互动功能
- 热门内容推荐

### 应急信息
- 应急联系方式
- 车辆注意事项
- 应急报告功能

## 🎨 UI设计特色

### 水彩风格
- 渐变背景效果
- 水彩装饰元素
- 柔和色彩搭配

### 响应式设计
- 移动端适配
- 平板端优化
- 桌面端体验

### 现代化界面
- 简洁大方设计
- 流畅动画效果
- 直观操作体验

## 🔒 安全特性

- **CORS配置**：跨域请求安全
- **输入验证**：防止恶意输入
- **错误处理**：完善的错误处理机制
- **日志记录**：操作日志记录

## 📊 性能优化

- **数据缓存**：Redis缓存机制
- **图片优化**：响应式图片加载
- **代码分割**：按需加载模块
- **CDN加速**：静态资源CDN

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目维护者：[您的姓名]
- 邮箱：[your.email@example.com]
- 项目链接：[GitHub Repository URL]

## 🙏 致谢

- 感谢所有贡献者的支持
- 感谢第三方API服务提供商
- 感谢开源社区的支持

---

**注意**：本项目仅供学习和演示使用，生产环境使用前请确保所有API密钥的安全性，并遵守相关服务条款。 