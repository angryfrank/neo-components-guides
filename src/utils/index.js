let systemName = "neo-components";

export var translateCodeToStr = function(code) {
  return code.trim().replace(/></g, ">\n<");
};

/**
 * 获取local中的数据
 */
export var getLocalDataByName = function(name) {
	return localStorage.getItem(name + systemName);
}
/**
 * 设置local存储至本地
 * 
 * @param name
 * @param value
 */
export var setLocalDataInfo = function(name, value) {
	localStorage.setItem(name + systemName, value);
}

/**
 * 移除指定local数据
 * 
 * @param name
 */
export var removeLocalDataByName = function(name) {
	localStorage.removeItem(name + systemName);
}
