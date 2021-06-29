import React, { useEffect, useRef, useState } from "react";
import { INode } from "../utils/helper";
import classnames from 'classnames'

export const SingleTreeNode: React.FC<Partial<INode>> = ({ id, data }) => {
  return <div className={classnames("tree-node-dot", id)}>
    <div>{data}</div>
  </div>
}
