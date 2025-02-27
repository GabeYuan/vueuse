import type { MaybeComputedRef } from '@vueuse/shared'
import { resolveUnref } from '@vueuse/shared'
import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'

/**
 * Reactive `Array.map`
 *
 * @see https://vueuse.org/useArrayMap
 * @param {Array} list - the array was called upon.
 * @param fn - a function that is called for every element of the given `list`. Each time `fn` executes, the returned value is added to the new array.
 *
 * @returns {Array} a new array with each element being the result of the callback function.
 */
export function useArrayMap<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: T[]) => T,
): ComputedRef<T[]> {
  return computed(() => resolveUnref(list).map(i => resolveUnref(i)).map(fn))
}
