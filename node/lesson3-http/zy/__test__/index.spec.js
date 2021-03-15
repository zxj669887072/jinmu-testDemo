test('文件流读取json文件',async () => {
  const { parser } = require('../index');
  const {user} = await parser(__dirname + '/data/data.json');
  console.log('user',user);
  
  expect(user).toBe('tom');
});