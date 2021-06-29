import React, { useEffect, useRef, useState } from "react";
import { getTree, INode } from "../utils/helper";
import { SingleTreeNode } from "./node";
import LineTo, { LineToProps } from 'react-lineto';

interface ITreeViewerProps {
  level: number,
}

const getEdges = (edges: LineToProps[], node: INode) => {
  const from = node.id;
  if(node.left) {
    edges.push({ from, to: node.left.id })
  }
  if(node.right) {
    edges.push({ from, to: node.right.id })
  }
}

const getReactTree = (edges: LineToProps[], reactNodesByLevel: INode[][], current: INode | null) => {
  if(current) {
    getEdges(edges, current);
    if(Array.isArray(reactNodesByLevel[current.level])) reactNodesByLevel[current.level].push(current);
    else reactNodesByLevel[current.level] = [current]
    getReactTree(edges, reactNodesByLevel, current.left);
    getReactTree(edges, reactNodesByLevel, current.right);
  }
}

const getReactTreeUtil: React.FC<number> = (level) => {
  const reactNodesByLevel: INode[][] = [];
  const edges: LineToProps[] = [];
  const root = getTree(level);
  getReactTree(edges, reactNodesByLevel, root);
  return <React.Fragment>
    {
        reactNodesByLevel.map((reactNodes, level) => {
          return  <div className="btree-level" key={level}>
            {
              reactNodes.map((node, iter) => <SingleTreeNode data={node.data} id={node.id} key={node.id}>
                </SingleTreeNode>)
            }
          </div>
        }).map(x => x)
    }
    {edges.map(({ from, to }, iter) => <LineTo delay={5}  key={iter} from={from} to={to}/> )}
  </React.Fragment>
}

export const TreeViewer: React.FC<ITreeViewerProps> = ({ level }) => {


  return <div className={"tree-viewer-container"}>
    {getReactTreeUtil(level)}
  </div>
}
