var expect = require('expect');

var {generateMessage, generateLocationMessage} = require ('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var lan = '32';
    var lon = '34';
    var from = 'Yuval';

    var message = generateLocationMessage(from, lan, lon);
    expect(message).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${lan},${lon}`
    });
  });
});
