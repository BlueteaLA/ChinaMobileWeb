// 函数库函数列表
/*
1、getClass(select,[context])  获取指定class的元素
   select  指定的className
   context 指定的范围(没有的话默认document)
2、$(selector,[context])  加载页面/获取页面中的集合/创建元素节点
   selsctor  两种类型
        一、函数(function)  加载页面
        二、字符串(string)  获取页面中的集合
          注意：这里的字符串，写的时候一定要加引号
            ".one"  获取指定类名的元素的集合
            "#one"  获取指定ID的第一个元素
            "div"   获取指定标签名的元素的集合
            "<div>" 创建指定的元素节点
   context   指定的范围(没有的话默认document)  
3、setContent(obj,[val])  获取/修改某一对象的文本值
   obj  指定的对象
   val  修改后的值(没有的话，就是获取指定对象的文本值)
4、getStyle(obj,attr)  获取某一指定元素/对象的某一特定样式
   obj  指定的元素/对象
   attr 指定的样式(注意：这里的字符串，写的时候一定要加引号)
5、getChild(obj,[type])  获取某一元素的指定子节点
   obj  指定的元素
   type 子节点的类型
        type的取值：空、true、false
        空、true 获取的子节点为元素节点
        false    获取的子节点为元素节点和有内容的文本节点
6、firstChild(obj,[type])  获取指定元素的第一个子节点
   obj  指定的元素
   type 子节点类型
        type的取值：空、true、false
        空、true 获取的子节点为元素节点
        false    获取的子节点为元素节点和有内容的文本节点
7、lastChild(obj,[type])  获取指定元素的最后一个子节点
   obj  指定的元素
   type 子节点类型
        type的取值：空、true、false
        空、true 获取的子节点为元素节点
        false    获取的子节点为元素节点和有内容的文本节点
8、randomChild(obj,type,num)  获取指定元素的指定节点
   obj  指定的元素
   type 子节点类型
        type的取值：true、false
        true  获取的子节点为元素节点
        false 获取的子节点为元素节点和有内容的文本节点
   num  指定节点的下标
9、getNext(obj,[type])  获取指定元素的下一个元素兄弟节点/下一个有内容的文本兄弟节点
   obj  指定的元素
   type 下一个兄弟节点的类型
        type的取值：空、true、false
        空、true 获取下一个元素兄弟节点
        false    获取下一个有内容的文本节点
10、getPrevious(obj,[type])  获取指定元素的上一个元素兄弟节点/下一个有内容的文本兄弟节点
    obj  指定的元素
    type 上一个兄弟节点的类型
         type的取值：空、true、false
         空、true 获取上一个元素兄弟节点
         false    获取上一个有内容的文本节点
11、insertAfter(obj,obj1)  将obj插入到obj1的后面，作为obj1的下一个兄弟元素
    obj  要插入的元素
    obj1 兄弟元素
12、insertBefore(obj,obj1)  将obj插入到obj1的前面，作为obj1的上一个兄弟元素
    obj  要插入的元素
    obj1 兄弟元素
    （原生方法(父元素.insertBefore(要插入的元素,之前的元素))就有，这里只是封装一下，用的时候方便）
13、appendAfter(obj,obj1)  将obj插入到父元素obj1的最后面，作为obj1的最后一个子元素
    obj  要插入的元素
    obj1 父元素
    （原生方法(父元素.appendChild(追加的元素))就有，这里只是封装一下，用的时候方便）
14、appendBefore(obj,obj1)  将obj插入到父元素obj1的最前面，作为obj1的第一个子元素
*/ 














/*
getClass(select,[context])  获取具有指定class的元素
select 指定的className
context 指定的范围（不指定的话为document）
思路：
第一步：
    先看看有没有指定范围
第二步；
    判断浏览器类型
第三步：
    1.w3c的话直接用
    2.IE的话需要构造函数
        a.选中所有的元素
        b.声明一个空数组（用来接收指定class的元素）
        c.遍历所有的类名，如果类名与所指定的类名相同时把这个类名压入空数组中
        d.返回空数组
*/ 

function getClass1(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(all[i].className==select){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}




// 防止一个元素有多个类名（IE中会算少）
function getClass2(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass2(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass2(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}



// 在指定范围内选择
function getClass(select,context){
	var context = context ? context:document;
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=context.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=context.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}








/*
$(string)获取页面中的集合

".one"  获取指定类名的元素的集合
"#one"  获取指定ID的第一个元素
"div"   获取指定标签名的元素的集合
"<div>" 创建指定的元素节点

思路：
    第一步：
        判断字符串的首字符
    第二步：
        .    getClass()
        #    document.getElementById()
       标签  document.getElementsByTagName()
       <div> 创建一个div
*/ 
// 缺陷：只能判断一个数值
function $1(selector){
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1));
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
		return document.getElementsByTagName(selector);
	}
}

// 可以增加函数功能
function $2(selector,context){
	var context=context||document;
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1),context);
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
		return context.getElementsByTagName(selector);
	}
}


function $(selector,context){
	if(typeof selector=="string"){
		var context=context||document
	    if(selector.charAt(0)=="."){
		    return getClass(selector.slice(1),context);
	    }else if(selector.charAt(0)=="#"){
		    return document.getElementById(selector.slice(1));
	    }else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
		    return context.getElementsByTagName(selector);
	    }else if(/^<[a-z][a-z1-6]{0,8}>$/.test(selector)){
	    	return document.createElement(selector.slice(1,-1));
	    }
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}










/*
setContent(obj,val)
obj 
val 所修改的内容 （有的话是修改   没的话是返回值）
第一步：判断val有木有
第二步：判断浏览器类型
*/

function setContent(obj,val){
    for(var i=0;i<obj.length;i++){
        if(val){
            if(obj[i].innerText){
                obj[i].innerText=val;
            }else{
                obj[i].textContent=val;
            }
        }else{
            if(obj[i].innerText){
                return innerText[i];
            }else{
                return textContent[i];
            }
        }
    } 
}




/*
getStyle(one,"width")
功能  获取指定元素的某一指定样式
*/ 
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}






/*
getChild(one,type)
功能  获取指定元素的指定子节点
one：指定的对象
type：获取子节点的类型

思路：
    第一步：获取子节点
    第二步：建立一个空数组，用来接收需要的子节点
    第三步：遍历子节点，挑选
    第四步：返回数组
*/
function getChild(obj,type){
	var child=obj.childNodes;
	var type=type==undefined?true:type;
	var arr=[];
	for(var i=0;i<child.length;i++){
		if(type==true){
			if(child[i].nodeType==1){
				arr.push(child[i]);
			}
		}else if(type==false){
			if(child[i].nodeType==1||child[i].nodeType==3&&!(/^\s+$/.test(child[i].nodeValue))){
				arr.push(child[i]);
			}
		}
	}
	return arr;
}

/*
firstChild()
*/ 
function firstChild(obj,type){
	return getChild(obj,type)[0];
}
/*
lastChild()
*/ 
function lastChild(obj,type){
	return getChild(obj,type)[getChild(obj,type).length-1]
}
/*
randomChild
*/ 
function randomChild(obj,type,num){
	return getChild(obj,type)[num];
}




/*
nextSibling(obj)
功能 寻找下一个元素节点
思路：
    第一步：判断obj是否有没有nextSibling
        没有 return 没有下一个兄弟节点
        有  进入循环
            判断有没有下一个兄弟节点
            没有  return 没有下一个兄弟节点
            有    进入循环 更新next
*/ 
/*function getNext(obj){
	var brother=obj.nextSibling;
	var parent=obj.parentNode;
	var child=parent.childNodes;
	var arr=[];
	if(brother.nodeType==1){
		arr.push(brother);
	}else{
		for(var i=0;i<child.length;i++){}
		if(){}
	}
	return arr;
}*/
// 选择下一个兄弟元素节点
function getNext1(obj){
	var next=obj.nextSibling;
	if(next==null){
		return "没有下一个兄弟元素节点";
	}
	while(next.nodeType==3||next.nodeType==8){
		if(next==null){
			return "没有下一个兄弟元素节点";
		}
		next=next.nextSibling;
	}
	return next;
}
// 选择下一个兄弟文本节点
function getNext2(obj){
	var next=obj.nextSibling;
	if(next==null){
		return "没有下一个兄弟元素节点";
	}
	while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
		if(next==null){
			return "没有下一个兄弟元素节点";
		}
		next=next.nextSibling;
	}
	return next;
}
// 选择下一个兄弟文本节点或者元素节点
function getNext(obj,type){
	var next=obj.nextSibling;
	var type=type==undefined?true:type;
	if(type==true){
		if(next==null){
		    return "没有下一个兄弟元素节点";
	    }
	    while(next.nodeType==3||next.nodeType==8){
		    if(next==null){
			    return "没有下一个兄弟元素节点";
		    }
		    next=next.nextSibling;
	    }
	    return next;
	}else if(type==false){
		if(next==null){
		    return "没有下一个兄弟元素节点";
	    }
	    while((next.nodeType==3&&(/^\s+$/.test(next.nodeValue)))||next.nodeType==8){
		    if(next==null){
			    return "没有下一个兄弟元素节点";
		    }
		    next=next.nextSibling;
	    }
	    return next;
	}
}
/*
getPrevious()
功能 获取上一个兄弟元素节点
*/ 
// 获取上一个兄弟元素节点
function getPrevious1(obj){
	var previous=obj.previousSibling;
	if(previous==null){
		return "没有上一个兄弟元素节点";
	}
	while(previous.nodeType==3||previous.nodeType==8){
		if(previous==null){
			return "没有上一个兄弟元素节点";
		}
		previous=previous.previousSibling;
	}
	return previous;
}
function getPrevious2(obj){
	var previous=obj.previousSibling;
	if(previous==null){
		return "没有上一个兄弟元素节点";
	}
	while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
		if(previous==null){
			return "没有上一个兄弟元素节点";
		}
		previous=previous.previousSibling;
	}
	return previous;
}






/*
insertAfter(obj,obj1)
功能  将obj插入obj1的后面
思路：
    将obj插入obj1下一个兄弟节点的前面
    第一步：获取obj1的下一个兄弟节点和父元素
    第二步：判断兄弟节点
             true   parent.insertBefore(obj,next)
            false   parent.
*/ 
function insertAfter(obj,obj1){
	var next=getNext(obj1);
	var parent=obj1.parentNode;
	if(next){
		parent.insertBefore(obj,next)
	}else{
		parent.appendChild(obj)
	}
}
function insertBefore(obj,obj1){
	var parent=obj1.parentNode;
	parent.insertBefore(obj,obj1);
}




/*appendBefore(obj,obj1)
功能： 将obj插入父元素obj1的子元素中的最前面
思路：
    第一步：找到obj的第一个子元素first
    第二步：判断first
            true  
            false  
*/ 
function appendBefore(obj,obj1){
	var first=firstChild(obj1);
	if(first){
		obj1.insertBefore(obj,first);
	}else{
		obj1.appendChild(obj)
	}
}
function appendAfter(obj,obj1){
	obj1.appendChild(obj);
}