test('练习05 发布订阅',() =>{
  const mockFn = jest.fn();
  const Connection = require('../index');
  const conn = new Connection();

  // 订阅连接回调
  conn.onConn(mockFn);
  conn.onConn(mockFn);

  setTimeout(() =>{
    conn.connection('连接1完成');
  },100);

  setTimeout(() =>{
    conn.connection('连接2完成');
  },100);

  console.log(123);
  setTimeout(() =>{
    const calls = mockFn.mock.calls;console.log(1234);
    console.log('calls',calls);

    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe('连接1完成');
    expect(calls[1][0]).toBe('连接1完成');
    expect(calls[2][0]).toBe('连接2完成');
    expect(calls[3][0]).toBe('连接2完成');
  },500);

})