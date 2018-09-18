export var translateCodeToStr = function(code) {
  return code.trim().replace(/></g, ">\n<");
};
