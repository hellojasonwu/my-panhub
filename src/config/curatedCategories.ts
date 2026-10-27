/**
 * 精选资源分类字典（与官方站 panhub config/curatedCategories.ts 保持一致；
 * key 是 API /api/curated-resources 下发的稳定标识，改这里要同步官方站）
 */
export const CURATED_CATEGORIES = [
  { key: "hot", label: "热门推荐", emoji: "🔥" },
  { key: "movie", label: "影视剧集", emoji: "🎬" },
  { key: "software", label: "软件工具", emoji: "🛠️" },
  { key: "study", label: "学习资料", emoji: "📚" },
  { key: "book", label: "电子书", emoji: "📖" },
  { key: "music", label: "音乐音频", emoji: "🎵" },
  { key: "material", label: "素材模板", emoji: "🎨" },
] as const;

export type CuratedCategoryKey = (typeof CURATED_CATEGORIES)[number]["key"];

/** 默认分类：老缓存响应没有 category 字段时归这里 */
export const DEFAULT_CURATED_CATEGORY: CuratedCategoryKey = "hot";
