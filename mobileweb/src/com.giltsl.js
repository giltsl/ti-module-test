define(["Ti/_/lang"], function(lang) {

	return lang.setObject("ti-module-test", {
		example: function() {
			return "hello world";
		},

		properties: {
			exampleProp: "hello world"
		}
	});

});