var inorderTraversal = function(root) {
    let arr=[]
    let arr2=[]
    while(root!==null || arr.length!==0){
        while (root!==null){
            arr.push(root)
            root=root.left
        }
        root=arr.pop()
        arr2.push(root.val)
        root=root.right
    }
    return arr2
};