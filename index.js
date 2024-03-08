// 创建一个画布元素
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义果冻泡泡对象
class JellyBubble {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.minRadius = radius;
    this.maxRadius = radius * 5;
  }

  // 更新果冻泡泡的位置
  update() {
    this.x += this.vx;
    this.y += this.vy;

    // 边界碰撞检测
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.vy = -this.vy;
    }
  }

  // 绘制果冻泡泡
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// 创建多个果冻泡泡
const jellyBubbles = [];
for (let i = 0; i < 20; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 20 + 10;
  const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
  jellyBubbles.push(new JellyBubble(x, y, radius, color));
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  jellyBubbles.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
}

// 开始动画
animate();
