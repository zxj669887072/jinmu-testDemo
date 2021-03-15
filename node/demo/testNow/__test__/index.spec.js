test('测试生成文件名',() => {
  const src = new (require('../index'))();
  const result = src.getTestFileName('/zxc/zyy.js');
  console.log('result',result);

  expect(result)
    .toBe('/zxc/__test__/zyy.spec.js');
})