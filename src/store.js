import { useMemo } from 'react'
import { observable } from '@nx-js/observer-util'
import { isInsideFunctionComponent } from './view'
import { hasHooks } from './utils'

export default function store (obj) {
  // do not create new versions of the store on every render
  // if it is a local store in a function component
  // create a memoized store at the first call instead
  if (hasHooks && isInsideFunctionComponent) {
    return useMemo(() => observable(obj), [])
  }
  return observable(obj)
}
