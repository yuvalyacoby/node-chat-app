var expect = require('expect');

var {generateMessage} = require ('./message');

describe('generatemessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('Yuval', 'Hey test');

    expect(message).toMatchObject({
      from: 'Yuval',
      text: 'Hey test'
    });
    expect(typeof message.createdAt).toBe('number');
  });
});
