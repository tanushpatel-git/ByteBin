import { Redis } from "@upstash/redis"

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

let redis: Redis | null = null

if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  })
} else {
  console.warn("Upstash Redis not configured — caching disabled")
}

async function cacheGet<T>(key: string): Promise<T | null> {
  if (!redis) return null
  try {
    const data = await redis.get(key)
    return data ? (data as T) : null
  } catch {
    return null
  }
}

async function cacheSet(key: string, value: unknown, ttl = 3600): Promise<void> {
  if (!redis) return
  try {
    await redis.setex(key, ttl, JSON.stringify(value))
  } catch {
    // silently fail
  }
}

async function cacheDel(key: string): Promise<void> {
  if (!redis) return
  try {
    await redis.del(key)
  } catch {
    // silently fail
  }
}

export { redis, cacheGet, cacheSet, cacheDel }
