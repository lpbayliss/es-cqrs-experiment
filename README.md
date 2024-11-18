# es-cqrs-experiment

## Project Setup

### Install

```bash
pnpm install
```

### Development

#### 1. Start Redis

```bash
docker run -d --name redis-stack-fast-loyalty -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

#### 2. Start Application

```bash
pnpm develop
```

### Build

```bash
pnpm build
```
