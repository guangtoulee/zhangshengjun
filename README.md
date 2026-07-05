# 永泰方壶岩·张圣君母殿官网

张圣君文化主题独立官网，面向 `zhangshengjun.org` 部署。

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Vercel 项目建议直接连接独立 GitHub 仓库，并绑定：

- `zhangshengjun.org`
- `www.zhangshengjun.org`

Cloudflare DNS 推荐先使用 DNS only：

- `A @ 76.76.21.21`
- `CNAME www cname.vercel-dns.com`
