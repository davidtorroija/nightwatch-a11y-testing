/*jshint esversion: 6 */

module.exports = {
  '@tags': ['good'],
  'Load Apply Page' : function (client) {
    client
      .url('http://fyvr.net/acme/apply.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.header > h1', 'Join the Acme Widgets Team');
  },

  'Validate HTML': function (client) {
    client
      .validator();
  },

  'Check Tab Order': function(client) {
    const TAB = client.Keys.TAB;

    for(var i = 0; i < 9; i++) {
      client.keys([TAB]);
    }

    client
      .assert.isFocused('id', 'fname', 'First name field should be focused.')
      .keys([TAB])
      .assert.isFocused('id', 'lname', 'Last name field should be focused.')
      .keys([TAB])
      .assert.isFocused('id', 'tel', 'Telephone field should be focused.')
      .keys([TAB])
      .assert.isFocused('id', 'email', 'Email field should be focused.');
  },

  'Check Tenon a11y': function (client) {
    client
      .tenonCheck();
  },

  'Submit Form': function (client) {
    client
      .setValue('input[id="fname"]', 'Jane')
      .setValue('input[id="lname"]', 'Doe')
      .setValue('input[id="tel"]', '888-888-8888')
      .setValue('input[id="email"]', 'jane@doe.com')
      .click('button[type="submit"]')
      .pause(1000)
      .assert.title('Thnank you for applying | Acme Widgets');
  },

  'Validate Apply Response HTML': function (client) {
    client
      .validator();
  },

  'Check Response Tenon a11y': function (client) {
    client
      .tenonCheck();
  },

  after : function(client) {
    client.end();
  }
};
