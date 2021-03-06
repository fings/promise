
// 主要核心逻辑入口
// 
// 
// 
// 

const fs = require('fs');
const path = require('path');
const apiServer = require('./api');
const staticServer = require('./staticserver');
class App{
	constructor(){

	}
	initServer(){
		//init初始化
		// let _package = require('../package');//package is reserved word(X)

		//高阶函数;
		return (request,response)=>{
			// process.cwd();//count work directory(node环境下运行)
			let {url} = request;

			if(url.match('action')){
				let body = apiServer(url);
				// response.writeHead(200,'resolve ok',)
				// response.end(body);
				response.end(JSON.stringify(body.toString());
			}
			let body = staticServer(url);
			response.end(body);
		}
	}
}

module.exports = App;