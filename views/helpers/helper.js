var helpers = function() {

  var blocks = Object.create(null);

  return {
    extend: function (name,context) {
        var block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }
        block.push(context.fn(this));
    },
    block: function (name) {
        var val = (blocks[name] || []).join('\n');
        // clear the block
        blocks[name] = [];
        return val;
    },
    conditions: value => {
      return value === "positive"
    }
  }
};
module.exports.helpers = helpers;
