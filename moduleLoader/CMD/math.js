define(function(require,exports,module){
	let add = function(a,b){
		return a+b;
	}

	let minus = function(a,b){
		return a-b;
	}

	module.exports={
		add:add,
		minus:minus
	}
})