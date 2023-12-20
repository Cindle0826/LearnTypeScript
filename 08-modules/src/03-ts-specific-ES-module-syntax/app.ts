// TS 中特殊的導出
// import { Cat, Dog } from './animals'
// import type { createCatName } from './animals'
import { createCatName, type Cat, type Dog} from './animals'

type Animals = Cat | Dog
