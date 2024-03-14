// router.ts 或类似的文件
const Router = require('koa-router');
const svgCaptcha = require('svg-captcha');

const captchaRouter = new Router();

captchaRouter.get('/captcha', ctx => {
    const captcha = svgCaptcha.create({
      size: 6, // 验证码长度
      ignoreChars: '0o1i', // 验证码字符排除 '0o1i'
      noise: 2, // 噪声线条数
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#cc9966' // 背景色
    });
    ctx.session.captcha = captcha.text; // 保存验证码文字到 session
    ctx.response.type = 'image/svg+xml'; // 响应类型
    ctx.body = captcha.data; // 发送验证码图片
  });
  

  export const captchaRoutes = captchaRouter.routes();