#!/bin/bash

echo "🚀 启动广西云南环线自驾游智能旅游助手..."

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到Node.js，请先安装Node.js"
    exit 1
fi

# 检查Python是否安装
if ! command -v python3 &> /dev/null; then
    echo "❌ 错误: 未找到Python3，请先安装Python3"
    exit 1
fi

# 启动后端服务
echo "📡 启动后端API服务..."
cd backend
if [ ! -d "node_modules" ]; then
    echo "📦 安装后端依赖..."
    npm install
fi

# 在后台启动后端服务
npm start &
BACKEND_PID=$!

# 等待后端启动
echo "⏳ 等待后端服务启动..."
sleep 3

# 检查后端是否启动成功
if curl -s http://localhost:3001/api/trip/guangxi-yunnan-16days > /dev/null; then
    echo "✅ 后端服务启动成功 (端口: 3001)"
else
    echo "❌ 后端服务启动失败"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# 启动前端服务
echo "🌐 启动前端Web服务..."
cd ../frontend
if [ ! -d "node_modules" ]; then
    echo "📦 安装前端依赖..."
    npm install
fi

# 在后台启动前端服务
python3 -m http.server 8000 &
FRONTEND_PID=$!

# 等待前端启动
sleep 2

echo "✅ 前端服务启动成功 (端口: 8000)"
echo ""
echo "🎉 应用启动完成！"
echo "📱 前端地址: http://localhost:8000"
echo "📡 后端API: http://localhost:3001"
echo ""
echo "按 Ctrl+C 停止所有服务"

# 等待用户中断
trap "echo ''; echo '🛑 正在停止服务...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo '✅ 服务已停止'; exit 0" INT

# 保持脚本运行
wait 