function add (a,b) {
  return a+b;
}
function minus (a,b) {
  return a-b;
}

module.exports = {
	add:add,
	minus:minus
}

//或者：
exports.add = add;
exports.minus = minus;

