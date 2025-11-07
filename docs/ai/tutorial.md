# 神笔 AI 使用教程

## 快速开始

- 注册并登录
  ![注册](/images/api/login.png)
- 控制台
  控制台页面可以测试模型，查看余额，查看使用日志，令牌管理（key 管理），钱包重置等
  ![控制台](/images/api/console.png)

- 创建 API 密钥
  点击添加令牌创建令牌，可以选择不同的分组，目前神笔 AI 提供 default，free，优惠这 3 个分组，默认 default 分组包括其他分组模型，选用优惠和 free 分组就只可以使用对应的模型。优惠分组提供 3 折优惠，free 分组提供免费模型
  ![令牌](/images/api/key.png)

## API 文档

神笔 AI 完全兼容 Openai 接口，在对应 url 处输入`https://ai.qgming.com`或者`https://ai.qgming.com/v1`即可调用

一些完整调用示例：
聊天（Chat）：https://ai.qgming.com/v1/chat/completions
嵌入（Embedding）：https://ai.qgming.com/v1/embeddings
模型查询：https://ai.qgming.com/v1/models

## 使用示例

- 神笔 AI
  ![神笔写作](/images/api/shenbikey.png)
- RooCode
  ![code](/images/api/roocode.png)
