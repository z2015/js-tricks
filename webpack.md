## libraryExport

- entry文件使用es语法时，默认不设置libraryExport时，exports的_esModule属性为true，外部文件默认导入时（使用import a from 'module'）, 使用的是exports.default属性，

- 如果设置了libraryExport, webpack导出的是module.default(假设libraryExport为default), 此时exports的_esModule为false, 外部文件默认导入时（使用import a from 'module'）此时导入默认时使用当前exports值

- 定义_esModule代码

```js
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
```

- 获取默认导入模块代码

```js
__webpack_require__.n = function(module) {
	var getter = module && module.__esModule ?
		function getDefault() { return module['default']; } :
		function getModuleExports() { return module; };
	__webpack_require__.d(getter, 'a', getter);
	return getter;
};
```