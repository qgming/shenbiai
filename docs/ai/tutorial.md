---
prev:
  text: "产品介绍"
  link: "/ai/introduction"
next: false
---

# 神笔 AI 使用教程

## 快速开始

### 1. 注册并登录

首先访问神笔 AI 平台进行注册和登录。

![注册登录](/images/api/login.png)

### 2. 控制台功能

控制台页面提供以下功能：

- 测试模型
- 查看余额
- 查看使用日志
- 令牌管理（API Key 管理）
- 钱包充值

![控制台](/images/api/console.png)

### 3. 创建 API 密钥

点击"添加令牌"按钮创建 API 密钥。神笔 AI 提供三种分组：

| 分组        | 说明     | 优势               |
| ----------- | -------- | ------------------ |
| **default** | 默认分组 | 包含所有分组的模型 |
| **优惠**    | 优惠分组 | 提供 3 折优惠      |
| **free**    | 免费分组 | 提供免费模型       |

> **注意：** 选择优惠和 free 分组后，只能使用对应分组的模型。

![令牌管理](/images/api/key.png)

## API 文档

### 接口说明

神笔 AI 完全兼容 OpenAI 接口规范，只需将 API 地址替换为神笔 AI 的服务地址即可。

**基础地址：**

- `https://ai.qgming.com`
- `https://ai.qgming.com/v1`

### 接口端点

| 功能     | 端点                                        | 说明         |
| -------- | ------------------------------------------- | ------------ |
| 聊天对话 | `https://ai.qgming.com/v1/chat/completions` | 支持对话生成 |
| 文本嵌入 | `https://ai.qgming.com/v1/embeddings`       | 生成文本向量 |
| 模型列表 | `https://ai.qgming.com/v1/models`           | 查询可用模型 |

## 使用示例

### 在神笔写作平台中使用

在神笔写作中配置 API 密钥即可开始使用。

![神笔写作配置](/images/api/shenbikey.png)

### 在 RooCode 中使用

在 RooCode 插件中中配置神笔 AI 的 API 地址和密钥。

![RooCode 配置](/images/api/roocode.png)

## 最佳实践

### 模型选择建议

- **日常对话**：推荐使用 `gpt-5-mini`，性价比高
- **专业写作**：推荐使用 `gpt-5` 或 `gemini-2.5-pro`
- **快速响应**：推荐使用 `gemini-2.5-flash`
- **文本分析**：推荐使用 `shenbi-embedding` 模型
- **网文创作**：推荐使用 `shenbi-base` 模型

## 常见问题

### Q: 如何选择合适的分组？

A: 如果需要使用所有模型，选择 default 分组；如果希望降低成本，可选择优惠分组；如果想免费体验，可选择 free 分组。

### Q: API 密钥的安全性？

A: 请妥善保管您的 API 密钥，不要在公开场合泄露。如有泄露，请及时在控制台删除并重新创建。

### Q: 如何查看使用量和余额？

A: 登录控制台后，在首页即可查看当前余额和使用统计。

### Q: 支持哪些编程语言？

A: 神笔 AI 兼容所有支持 OpenAI API 的编程语言，包括 Python、JavaScript、Java、Go 等。

## 技术支持

如果您在使用过程中遇到任何问题，可以通过以下方式获取帮助：

- **客服邮箱**：`qgming@qq.com`
