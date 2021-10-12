const merge = require('single-merge')

interface ICommon {
  name: string
  age: number
}

interface ICommon1 {
  address: string
}

interface IMerge {
  merge: (data: ICommon1, data1: ICommon) => ICommon1 & ICommon
}

const _: IMerge = {
  merge
}
export default _
