describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("docs/examples/example-example44/index-jquery.html");
  });
  
it('should test service', function() {
  expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
      .toEqual('test');
});
});