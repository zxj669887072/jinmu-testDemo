
function render(vnode,container){
  console.log('render',vnode,container);

  const node = createNode(vnode);
  container.appendChild(node);
  // return;
};

function isString(data){
  return typeof data === "string"
}

function createNode(vnode){console.log('createNode',vnode)
  let node;
  const {type} = vnode;
  // 原生标签 div
  if(isString(type)){
    node = updateHostComponent(vnode);
  }else if(typeof type === "function"){
    node = updateFunctionCom(vnode);
  }else{
    node = updateTextComponent(vnode);
  }

  return node;
}

// 原生标签
function updateHostComponent(vnode){
  const {type,props} = vnode;
  let node = document.createElement(type);

  // 属性
  udateProps(node,props);

  reconcileChildren(node, props.children);
  return node;
}

// 文本
function updateTextComponent(vnode) {
  const node = document.createTextNode(vnode);
  return node;
}

// 函数function
function updateFunctionCom(vnode){
  const {type,props} = vnode;
  let vnode_func = type(props);
  const node = createNode(vnode_func);
  return node;
}

function udateProps(node,props){
  let propList = Object.keys(props).filter(prop => prop !== 'children');
  console.log(propList);
  propList.forEach(prop => {
    node[prop] = props[prop];//console.log(node,props[prop]);
  })

}

function reconcileChildren(parentNode,children){
  let newChildren = Array.isArray(children) ? children : [children];
  for(let i = 0;i<newChildren.length;i++){
    let child = newChildren[i];
    render(child,parentNode)
  }
}


export default  {render};