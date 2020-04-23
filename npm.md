## install

### 安装过程提示某个包损坏

日志内容: warn tarball tarball data for echarts@^4.4.0 (sha1-Wzh1pML5HjkpQl+rq56s5+QJiz8=) seems to be corrupted. Trying one more time.

#### 解决步骤

一个是查看nexus仓库的报错日志：
java.io.IOException: java.util.concurrent.TimeoutException: Idle timeout expired: 30000/30000 ms
对应修改etc/jetty/jetty-http.xml中<Set name="idleTimeout"><Property name="jetty.http.timeout" default="30000"/></Set>
修改完成后执行nexus restart命令

重新尝试安装，还是提示报错，再次检测nexus日志
提示org.eclipse.jetty.io.EofException: null
对应修改AppData\Roaming\npm\node_modules\npm\node_modules\npm-registry-fetch\config.js文件
```js
'timeout': {
    default: 300 * 1000 //旧值30*1000
},
```

再次安装，可以解决问题