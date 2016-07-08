
$(function(){
    // 头部选项卡
    var hr1=$(".head_right1")[0];
    var dl=$("a",hr1)[0];
    var dlk=$("div",hr1)[0];
    var hr2=$(".head_right2")[0];
    var yyt=$(".yyt",hr2)[0];
    var yytp=$(".yytp",hr2)[0];
    // 登陆的选项卡
    hr1.onmouseover=function(){
        hr1.style.backgroundImage="url(./images/t3-2.png)";
        hr1.style.backgroundRrepeat="no-repeat";
        hr1.style.backgroundPosition="14px 7px";
        hr1.style.backgroundColor="#ffffff";
        dl.style.color="#25b1fd";
        dlk.style.display="block";
    }
    hr1.onmouseout=function(){
        hr1.style.backgroundImage="url(./images/t3-1.png)";
        hr1.style.backgroundRrepeat="no-repeat";
        hr1.style.backgroundPosition="14px 7px";
        hr1.style.backgroundColor="#f6f6f6";
        dl.style.color="#ea4e9f";
        dlk.style.display="none";
    }
    // 手机营业厅的选项卡
    hr2.onmouseover=function(){
        yyt.style.backgroundImage="url(./images/t1-2.png)";
        yyt.style.backgroundRrepeat="no-repeat";
        yyt.style.backgroundPosition="10px 7px";
        hr2.style.backgroundColor="#ffffff";
        yyt.style.color="#25b1fd";
        yytp.style.display="block";
    }
    hr2.onmouseout=function(){
        yyt.style.backgroundImage="url(./images/t1-1.png)";
        yyt.style.backgroundRrepeat="no-repeat";
        yyt.style.backgroundPosition="10px 7px";
        hr2.style.backgroundColor="#f6f6f6";
        yyt.style.color="#888888";
        yytp.style.display="none";
    }








	// 选项卡
	var mb2=$(".mb2",$(".mainbav")[0]);
	var list1=$(".list1",$(".mainbav")[0]);
    var sy=$("a",$(".mainbav")[0]);
    // console.log(list1)


 //    // 用mb2的属性来保存下标
	// for(var i=0;i<mb2.length;i++){
	// 	mb2[i].index=i;
 //        mb2[i].onmouseover=function(){
	// 	    list1[this.index].style.display="block";
 //            mb2[this.index].style.background="#f3f3f3";
 //            // sy[this.index].style.color="#0085d0";
	//     }
	//     mb2[i].onmouseout=function(){
	// 	    list1[this.index].style.display="none";
 //            mb2[this.index].style.background="#e4e4e4";
 //            // sy[this.index].style.color="#666666";
	//     }
	// }

    // 用函数自调用来使用下标
    for(var i=0;i<mb2.length;i++){
        (function(n){
            mb2[n].onmouseover=function(){
            list1[n].style.display="block";
            mb2[n].style.background="#f3f3f3";
            // sy[this.index].style.color="#0085d0";
            }
            mb2[n].onmouseout=function(){
                list1[n].style.display="none";
                mb2[n].style.background="#e4e4e4";
                // sy[this.index].style.color="#666666";
            }
        })(i)
    }




    // banner轮播
    // 双下标左右平移
    // 获取元素
    var img=$("a",$(".banner_photo")[0]);
    var ban=$(".banner_main")[0];
    var list=$(".list",$(".diandian")[0]);
    var nex=$("li",$(".next")[0]);
    // 获取banner的宽度
    // 忘记parseInt
    var width=parseInt(getStyle(ban,"width"));
    // console.log(next);
    var flag=true;
    // 设置初始状态
    var index=0;
    var next=0;
    for(i=0;i<img.length;i++){
        if(i==0){
            continue;
        }
        img[i].style.left=width+"px";
    }
    list[0].style.background="#e22386";
    // 自动轮播
    var t=setInterval(moveR,5000)
    // 鼠标移上去停止轮播
    ban.onmouseover=function(){
        clearInterval(t);
    }
    // 鼠标挪出去继续轮播
    ban.onmouseout=function(){
        t=setInterval(moveR,5000)
    }
    // 点击点点换图片
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onclick=function(){
            if(this.index==index){
                return;
            }
            if(this.index>index){
                // 就位
                img[this.index].style.left=width+"px";
                // 动画
                animate(img[index],{left:-width});
                animate(img[this.index],{left:0});
                // 点点颜色变化
                for(var j=0;j<list.length;j++){
                    list[j].style.background="#d4d4d4";
                }
                list[this.index].style.background="#e22386";
                // 更新下标
                next=this.index;
                index=this.index;
            }else if(this.index<index){
                // 就位
                img[this.index].style.left=-width+"px";
                // 动画
                animate(img[index],{left:width});
                animate(img[this.index],{left:0});
                // 点点颜色变化
                for(var j=0;j<list.length;j++){
                    list[j].style.background="#d4d4d4";
                }
                list[this.index].style.background="#e22386";
                // 更新下标
                next=this.index;
                index=this.index;
            }
        }
    }
    // 点左箭头左移
    nex[0].onclick=function(){
        if(flag){
            flag=false;
            moveL();
        }   
    }
    // 点右箭头右移
    nex[1].onclick=function(){
        if(flag){
            flag=false;
            moveR();
        }
    }
    // 向右的函数
    function moveR(){
        // 更新next
        next++;
        // 判断是否越界
        if(next==img.length){
            next=0;
        }
        // 就位
        img[next].style.left=width+"px";
        // 动画
        animate(img[index],{left:-width});
        animate(img[next],{left:0},function(){
            flag=true;
        });
        // 更新index时用的方法错误（index++）
        index=next;
        // 随时更新点点颜色
        for(var i=0;i<img.length;i++){
            list[i].style.background="#d4d4d4";
        }
        list[next].style.background="#e22386";
    }
    // 向左的函数
    function moveL(){
        // 更新next
        next--;
        // 判断是否越界
        if(next==-1){
            next=img.length-1;
        }
        // 就位
        img[next].style.left=-width+"px";
        // 动画
        animate(img[index],{left:width});
        animate(img[next],{left:0},function(){
            flag=true;
        });
        // 更新index时用的方法错误（index++）
        index=next;
        // 随时更新点点颜色
        for(var i=0;i<img.length;i++){
            list[i].style.background="#d4d4d4";
        }
        list[next].style.background="#e22386";
    }




    // minibanner动效
    var bigbox=$(".banner_mini")[0];
    var mainbox=$(".mini_center",bigbox)[0];
    var allphoto=$(".allphoto")[0]
    var photo=$("li",mainbox);
    var pw=parseInt(getStyle(photo[0],"width"));
    var btn=$(".btn",bigbox)[0];
    var jiantou=$("li",btn);
    var num=0;
    var flag=true;
    var tmini=setInterval(moveLmini,1000);
    bigbox.onmouseover=function(){
        clearInterval(tmini);
    }
    bigbox.onmouseout=function(){
        tmini=setInterval(moveLmini,1000);
    }
    jiantou[0].onclick=function(){
        if(flag){
            flag=false;
            moveRmini();
        }
    }
    jiantou[1].onclick=function(){
        if(flag){
            flag=false;
            moveLmini();
        }
    }
    function moveLmini(){
        var first=allphoto.firstElementChild;
        animate(allphoto,{left:-pw},function(){
            allphoto.appendChild(first);
            flag=true;
            allphoto.style.left="0px";
        });
    }
    function moveRmini(){
        var last=allphoto.lastElementChild;
        var first=allphoto.firstElementChild;
        allphoto.style.left=-pw+"px";
        allphoto.insertBefore(last,first)
            animate(allphoto,{left:0},function(){
            flag=true;
        })
    }




    // 4G专区动效
    var fourg=$(".fourg")[0];
    var gbottom=$(".bottom",fourg)[0];
    var gright=$(".right",gbottom)[0];
    var gphoto=$("li",gright);
    for(var i=0;i<gphoto.length;i++){
        gphoto[i].index=i;
        gphoto[i].onmouseover=function(){
            animate(gphoto[this.index],{backgroundPosition:"58px 58px"},150,Tween.Bounce.easeOut);
            // gphoto[this.index].style.backgroundPosition="58px 58px";
        }
        gphoto[i].onmouseout=function(){
            animate(gphoto[this.index],{backgroundPosition:"78px 58px"},150,Tween.Bounce.easeOut);
            // gphoto[this.index].style.backgroundPosition="78px 58px";
        }
    }



    // 买手机动效
    var buyphone=$(".buy_phone")[0];
    var buybottom=$(".bottom",buyphone)[0];
    var buyphoto=$("li",buybottom);
    for(var i=0;i<buyphoto.length;i++){
        buyphoto[i].index=i;
        buyphoto[i].onmouseover=function(){
            animate(buyphoto[this.index],{backgroundPosition:"52px 102px"},150,Tween.Bounce.easeOut);
            // buyphoto[this.index].style.backgroundPosition="52px 102px";
        }
        buyphoto[i].onmouseout=function(){
            animate(buyphoto[this.index],{backgroundPosition:"72px 102px"},150,Tween.Bounce.easeOut);
            // buyphoto[this.index].style.backgroundPosition="72px 102px";
        }
    }



    // 业务推荐动效
    var business=$(".business")[0];
    var busbottom=$(".bottom",business)[0];
    var busright=$(".right",busbottom)[0];
    var busphoto=$("li",busright);
    for(var i=0;i<busphoto.length;i++){
        busphoto[i].index=i;
        busphoto[i].onmouseover=function(){
            animate(busphoto[this.index],{backgroundPosition:"58px 58px"},150,Tween.Bounce.easeOut);
            // busphoto[this.index].style.backgroundPosition="58px 58px";
        }
        busphoto[i].onmouseout=function(){
            animate(busphoto[this.index],{backgroundPosition:"78px 58px"},150,Tween.Bounce.easeOut);
            // busphoto[this.index].style.backgroundPosition="78px 58px";
        }
    }



    // 固定定位
    var online=$(".online_service")[0];
    var zxzx=$("li",online);
    var zxzxFlag=true;
    for(var i=0;i<zxzx.length;i++){
        zxzx[i].index=[i]
        zxzx[i].onmouseover=function(){
            animate(zxzx[this.index],{left:0})
        }
        zxzx[i].onmouseout=function(){
            animate(zxzx[this.index],{left:60})
        }
    }
})