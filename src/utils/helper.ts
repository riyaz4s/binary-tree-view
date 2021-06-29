export interface INode {
  data: number
  id: string
  left: INode | null
  right: INode | null
  level: number
}

export const getTree = (maxLevel: number = 0, currLevel: number = 0, data: { val: number } = { val: 1 }): INode => {
  const node = <INode>{
    data: data.val,
    left: null,
    right: null,
    level: currLevel,
    id: `${currLevel}${data.val}`
  }
  data.val += 1;
  if(currLevel === maxLevel) {
    return node;
  }
  node.left = getTree(maxLevel, currLevel+1, data)
  node.right = getTree(maxLevel, currLevel+1, data)
  return node;
}
