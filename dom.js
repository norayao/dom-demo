/*
const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
 */
window.dom = {
    find(selector){
        return document.querySelectorAll(selector);
    },
    style(node,name,value){
        switch (arguments.length){
            case 3:
                // 修改style
                node.style[name] = value;
                break;
            case 2:
                // 获取style
                if(typeof name === "string"){
                   return node.style[name];
                }
                // 通过 name:value 修改
                else if(name instanceof object){
                let contents = name; // object
                    for(let key in contents){
                        node.style[key] = contents[key]
                    }
                }
        }
    },
    each(target,func){
        for (let i=0; i<target.length;i++){
            func.call(null,target[i]);
        }
    }
}