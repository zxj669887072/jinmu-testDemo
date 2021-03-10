
function reconcileChildren(work,children){

}
updateFunctionComponent();
updateClassComponent();

// 函数组件
function updateFunctionComponent(workInProgress){
  const {type,props} = workInProgress;
  const children = type(props);

  reconcileChildren(workInProgress,children);
}

// 函数组件
function updateClassComponent(workInProgress){
  const {type,props} = workInProgress;
  const instance = new type(props);
  const children = instance.render();
  
  reconcileChildren(workInProgress,children);

}


