const { promisify } = require("util");
const figlet = promisify(require("figlet")); //大字体
const clear = require("clear"); //清屏
const chalk = require("chalk"); //粉刷打印字体颜色
const log = (content) => console.log(chalk.green(content));

const { clone } = require("./download");

// promisiy化spawn
// 对接输出流
// const spawn = async (...args) => {
//   const { spawn } = require("child_process");
//   return new Promise((resolve) => {
//     const proc = spawn(...args);
//     proc.stdout.pipe(process.stdout);
//     proc.stderr.pipe(process.stderr);
//     proc.on("close", () => {
//       resolve();
//     });
//   });
// };

const spawn = async (...args) => {
  const { spawn } = require("child_process");
  const options = args[args.length - 1];
  if (process.platform === "win32") {
    // 设置 shell 选项为 true 以隐式地调用 cmd
    options.shell = true;
  } else {
    // nothing
  }

  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};
const open = require("open");
console.log('open',open);

module.exports = async (name) => {
  // 打印欢迎画面
  clear();
  const data = await figlet("ZXC Welcome");
  log(data);
  // 创建项目
  log(`🚀创建项目:` + name);
  // 克隆代码
  // await clone("github:su37josephxia/vue-template", name);

  log("安装依赖");
  // await spawn("npm", ["install"], { cwd: `./${name}` });
  log(`
👌安装完成：
To get Start:
===========================
  cd ${name}
  npm run serve
===========================
          `);

  
  // open("http://localhost:8080");
  await spawn("npm", ["run", "serve"], { cwd: `./${name}` });
};
