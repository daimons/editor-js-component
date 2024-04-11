export const isObject = function (item: object) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * 深度合并对象
 * @param target 目标对象
 * @param source 合并对象
 * @returns Object
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src as T
}
