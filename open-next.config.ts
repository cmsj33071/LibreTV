import { defineCloudflareConfig } from '@opennextjs/cloudflare';

/**
 * OpenNext → Cloudflare Workers 适配配置。
 *
 * 这里保持最小配置：不启用 R2 增量缓存（当前账号没有 R2 桶），
 * 因此 ISR/数据缓存在 Workers 上退化为按请求渲染，行为与线上现网一致。
 * 若后续开通 R2，再补：
 *   import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';
 *   defineCloudflareConfig({ incrementalCache: r2IncrementalCache });
 */
export default defineCloudflareConfig({});
