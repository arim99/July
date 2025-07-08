// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 图片轮播
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// 每5秒切换一次图片
setInterval(nextSlide, 5000);

// 路线图交互
document.querySelectorAll('.route-point').forEach(point => {
    point.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';
    });
    
    point.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.timeline-item, .card, .tip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 费用预算图表动画
function animateChartBars() {
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.width;
            bar.style.opacity = '1';
        }, index * 200);
    });
}

// 当预算部分进入视口时触发动画
const budgetSection = document.querySelector('.budget');
const budgetObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateChartBars();
            budgetObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (budgetSection) {
    budgetObserver.observe(budgetSection);
}

// 移除 createWeatherToggle 相关逻辑

// 页面加载完成后初始化
// 费用分类及配色
const EXPENSE_CATEGORIES = [
  { key: '住宿', color: '#4CAF50', match: ['住宿'] },
  { key: '餐饮', color: '#2196F3', match: ['餐饮', '饭', '食'] },
  { key: '门票', color: '#FF9800', match: ['门票', '维护费'] },
  { key: '其他', color: '#9C27B0', match: [] }
];

function classifyExpense(name) {
  for (const cat of EXPENSE_CATEGORIES) {
    if (cat.key !== '其他' && cat.match.some(m => name.includes(m))) return cat.key;
  }
  return '其他';
}

function getCategoryColor(category) {
  const cat = EXPENSE_CATEGORIES.find(c => c.key === category);
  return cat ? cat.color : '#9C27B0';
}

document.addEventListener('DOMContentLoaded', function() {
    
    // 添加加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 每天的默认费用项（可根据实际行程调整）
    const defaultExpenses = [
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 160 },
            { name: '餐饮', value: 200 },
            { name: '竹筏', value: 200 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 200 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 400 },
            { name: '餐饮', value: 200 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 350 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 400 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 320 },
            { name: '餐饮', value: 200 },
            { name: '牧象', value: 396 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 200 },
            { name: '古城消费', value: 100 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 150 },
            { name: '餐饮', value: 200 },
            { name: '租车', value: 60 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '古城维护费', value: 100 },
            { name: '餐饮', value: 200 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 560 },
            { name: '餐饮', value: 200 },
            { name: '氧气瓶', value: 60 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 180 },
            { name: '餐饮', value: 300 },
            { name: '登山杖', value: 40 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '门票', value: 120 },
            { name: '餐饮', value: 200 },
            { name: '马车', value: 100 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 200 },
            { name: '猪槽船', value: 160 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 200 },
            { name: '花市消费', value: 100 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 360 }
        ],
        [
            { name: '住宿', value: 350 },
            { name: '餐饮', value: 200 },
            { name: '租车', value: 60 }
        ]
    ];

    // 全部天的费用数据，优先读取本地存储
    let allExpenses = [];
    try {
        const saved = localStorage.getItem('allExpenses');
        if (saved) {
            allExpenses = JSON.parse(saved);
        } else {
            allExpenses = defaultExpenses.map(arr => JSON.parse(JSON.stringify(arr)));
        }
    } catch(e) {
        allExpenses = defaultExpenses.map(arr => JSON.parse(JSON.stringify(arr)));
    }
    document.querySelectorAll('.expenses-editor').forEach(function(editor, idx) {
        if (!allExpenses[idx]) allExpenses[idx] = [];
        renderEditor(editor, allExpenses[idx], idx);
    });

    function renderEditor(container, expenses, dayIdx) {
        container.innerHTML = '';
        expenses.forEach((item, i) => {
            const row = document.createElement('div');
            row.className = 'expense-row';
            // 类别下拉
            const select = document.createElement('select');
            select.className = 'expense-category';
            EXPENSE_CATEGORIES.forEach(cat => {
                const opt = document.createElement('option');
                opt.value = cat.key;
                opt.textContent = cat.key;
                select.appendChild(opt);
            });
            // 初始类别
            let currentCat = item.category || classifyExpense(item.name);
            select.value = currentCat;
            // 色条
            const colorBar = document.createElement('div');
            colorBar.style.width = '6px';
            colorBar.style.height = '32px';
            colorBar.style.background = getCategoryColor(currentCat);
            colorBar.style.borderRadius = '4px';
            colorBar.style.marginRight = '8px';
            row.appendChild(colorBar);
            row.appendChild(select);
            // 名称输入框，仅“其他”显示
            let nameInput = null;
            if (select.value === '其他') {
                nameInput = document.createElement('input');
                nameInput.className = 'expense-name';
                nameInput.value = item.name;
                nameInput.placeholder = '请输入名称';
                nameInput.disabled = false;
                nameInput.addEventListener('input', () => {
                    item.name = nameInput.value;
                    saveExpenses();
                    updateBudget();
                });
                row.appendChild(nameInput);
            } else {
                item.name = select.value;
            }
            // 类别切换
            select.addEventListener('change', () => {
                item.category = select.value;
                colorBar.style.background = getCategoryColor(select.value);
                // 切换到其他，插入输入框；切换到非其他，移除输入框
                if (select.value === '其他') {
                    if (!nameInput) {
                        nameInput = document.createElement('input');
                        nameInput.className = 'expense-name';
                        nameInput.value = item.name || '';
                        nameInput.placeholder = '请输入名称';
                        nameInput.disabled = false;
                        nameInput.addEventListener('input', () => {
                            item.name = nameInput.value;
                            saveExpenses();
                            updateBudget();
                        });
                        row.insertBefore(nameInput, row.children[2]);
                    }
                    nameInput.style.display = '';
                    nameInput.value = item.name || '';
                    nameInput.disabled = false;
                } else {
                    if (nameInput) {
                        nameInput.style.display = 'none';
                    }
                    item.name = select.value;
                }
                saveExpenses();
                updateBudget();
            });
            // 金额
            const valueInput = document.createElement('input');
            valueInput.className = 'expense-value';
            valueInput.type = 'number';
            valueInput.min = '0';
            valueInput.value = item.value;
            valueInput.addEventListener('input', () => {
                item.value = parseInt(valueInput.value) || 0;
                saveExpenses();
                updateBudget();
                updateTotal();
            });
            row.appendChild(valueInput);
            row.appendChild(document.createTextNode('元'));
            // 删除按钮
            const delBtn = document.createElement('button');
            delBtn.className = 'remove-expense';
            delBtn.innerHTML = '×';
            delBtn.onclick = () => {
                expenses.splice(i, 1);
                saveExpenses();
                updateBudget();
                renderEditor(container, expenses, dayIdx);
            };
            row.appendChild(delBtn);
            container.appendChild(row);
        });
        // 添加按钮
        const addBtn = document.createElement('button');
        addBtn.className = 'add-expense';
        addBtn.innerHTML = '+';
        addBtn.onclick = () => {
            expenses.push({ name: '', value: 0, category: '住宿' });
            allExpenses[dayIdx] = expenses.map(e => ({ ...e }));
            saveExpenses();
            renderEditor(container, allExpenses[dayIdx], dayIdx);
        };
        container.appendChild(addBtn);
        // 总计
        const totalDiv = document.createElement('div');
        totalDiv.className = 'expense-total';
        totalDiv.innerHTML = '总计：<span>' + calcTotal(expenses) + '</span>元';
        container.appendChild(totalDiv);
        function updateTotal() {
            totalDiv.innerHTML = '总计：<span>' + calcTotal(expenses) + '</span>元';
        }
    }
    function calcTotal(arr) {
        return arr.reduce((sum, item) => sum + (parseInt(item.value) || 0), 0);
    }

    // 保存到本地存储
    function saveExpenses() {
        try {
            localStorage.setItem('allExpenses', JSON.stringify(allExpenses));
        } catch(e) {}
    }

    // 预算区联动
    function updateBudget() {
        // 统计所有天的所有费用
        const categorySum = { '住宿': 0, '餐饮': 0, '门票': 0, '其他': 0 };
        allExpenses.forEach(dayArr => {
            dayArr.forEach(item => {
                const cat = item.category || classifyExpense(item.name);
                categorySum[cat] += parseInt(item.value) || 0;
            });
        });
        // 更新图表
        const chartItems = document.querySelectorAll('.budget-chart .chart-item');
        const catKeys = ['住宿', '餐饮', '门票', '其他'];
        const total = catKeys.reduce((sum, k) => sum + categorySum[k], 0);
        const chartPercents = [
            total ? (categorySum['住宿'] / total * 100).toFixed(0) : 0,
            total ? (categorySum['餐饮'] / total * 100).toFixed(0) : 0,
            total ? (categorySum['门票'] / total * 100).toFixed(0) : 0,
            total ? (categorySum['其他'] / total * 100).toFixed(0) : 0
        ];
        chartItems.forEach((item, idx) => {
            const bar = item.querySelector('.chart-bar');
            bar.style.width = chartPercents[idx] + '%';
            bar.style.background = getCategoryColor(catKeys[idx]);
            item.querySelector('.amount').textContent = categorySum[catKeys[idx]] + '元';
        });
        // 更新明细
        const detailItems = document.querySelectorAll('.budget-details .detail-item');
        detailItems[0].querySelector('.value').textContent = categorySum['住宿'] + '元';
        detailItems[1].querySelector('.value').textContent = categorySum['餐饮'] + '元';
        detailItems[2].querySelector('.value').textContent = categorySum['门票'] + '元';
        detailItems[3].querySelector('.value').textContent = categorySum['其他'] + '元';
        // 更新总预算
        document.querySelector('.budget-summary h3').textContent = '总计算：' + total + '元（2人，不含油费）';
        // 更新首页横幅统计区的总预算
        const statYen = document.querySelector('.hero-stats .stat i.fa-yen-sign');
        if (statYen && statYen.nextElementSibling) {
            statYen.nextElementSibling.textContent = total + '元';
        }
    }

    // 首次渲染后初始化预算
    setTimeout(updateBudget, 200);
});

// 返回顶部按钮
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 创建返回顶部按钮
createBackToTop();

// 路线图城市点击事件
document.querySelectorAll('.route-point').forEach(point => {
    point.addEventListener('click', function() {
        const city = this.getAttribute('data-city');
        alert(`您点击了 ${city}！这里可以显示该城市的详细信息。`);
    });
});

// 费用标签点击事件
document.querySelectorAll('.expense-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// 安全提示卡片点击事件
document.querySelectorAll('.tip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // 关闭移动端菜单
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// 添加触摸手势支持（移动端）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 向左滑动 - 可以用于图片轮播
            nextSlide();
        } else {
            // 向右滑动
            // 可以添加其他功能
        }
    }
}

// 添加页面加载进度条
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #e74c3c);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 创建进度条
createProgressBar();

// 添加页面可见性API支持
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        document.body.style.animationPlayState = 'paused';
    } else {
        // 页面显示时恢复动画
        document.body.style.animationPlayState = 'running';
    }
});

// 添加错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 添加性能监控
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`页面加载时间: ${loadTime}ms`);
});

// 添加本地存储支持（记住用户偏好）
function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
}

function getUserPreference(key) {
    return localStorage.getItem(key);
}

// 示例：记住用户查看的最后一个部分
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        saveUserPreference('lastSection', this.getAttribute('href'));
    });
});

// 页面加载时恢复用户位置
window.addEventListener('load', function() {
    const lastSection = getUserPreference('lastSection');
    if (lastSection) {
        setTimeout(() => {
            const target = document.querySelector(lastSection);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1000);
    }
}); 

// 自动为每个城市点获取天气
function updateAllCityWeather() {
    const apiKey = '9f5acea64b4d4353b097722febcd0e71';
    const cityMap = {
        '广州番禺': 'guangzhou',
        '崇左': 'nanning', // 广西大城市
        '普者黑': 'nanning', // 归为南宁
        '玉溪': 'kunming',
        '西双版纳': 'xishuangbanna',
        '大理': 'dali',
        '丽江': 'lijiang',
        '香格里拉': 'shangri-la',
        '泸沽湖': 'lijiang', // 归为丽江
        '昆明': 'kunming',
        '北海': 'beihai',
        '湛江': 'zhanjiang'
    };
    const points = document.querySelectorAll('.route-point');
    points.forEach(point => {
        const city = point.getAttribute('data-city');
        const weatherSpan = point.querySelector('.city-weather');
        if (!city || !weatherSpan) return;
        const mapped = cityMap[city];
        if (!mapped) {
            weatherSpan.textContent = '敬请期待';
            return;
        }
        fetch(`https://devapi.qweather.com/v7/weather/now?location=${mapped}&key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.now) {
                    weatherSpan.textContent = `${data.now.temp}℃ ${data.now.text}`;
                } else {
                    weatherSpan.textContent = '敬请期待';
                }
            })
            .catch(() => {
                weatherSpan.textContent = '敬请期待';
            });
    });
}
// 页面加载和每10分钟刷新
updateAllCityWeather();
setInterval(updateAllCityWeather, 10 * 60 * 1000); 