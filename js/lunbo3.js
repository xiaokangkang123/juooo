function Banner(){}
$.extend(Banner.prototype,{
    //初始化
    init(opt){
        // 选择元素
        this.btn_list=$(opt.btn_list);
        // console.log(this.btn_list)
        this.li_list=$(opt.li_list);
        this.ul=$(".hot-down-ul2");
        // console.log(this.ul);
        this.wrap=$(".hot-down");
        // console.log(this.wrap);
        // li的宽度
        this.li_width=this.li_list.width();
        console.log(this.li_width);
        //li_list的长度
        this.liIndex=this.li_list.length;
        // console.log(this.liIndex);
        // 当前下标
        this.nowIndex=0;
        //调用核心功能
        this.bindEvent();
    },
    //绑定事件
    bindEvent(){
        this.btn_list.mouseover($.proxy(this.toIndex,this));
        this.wrap.mouseenter($.proxy(this.stop,this));
        this.wrap.mouseleave($.proxy(this.autoPlay,this))
    },
    //下一张图片
    next(){
        //判断是否到最后一张
        if(this.nowIndex==this.liIndex-1){
            this.nowIndex=1;
            this.ul.css({
                left:0
            })
        }else{
            this.nowIndex++;
        }
        //调用动画
        this.animate();
    },
    //到哪张
    toIndex(event){
        var target=event.target||event.srcElement;
        this.nowIndex=$(target).index();
        this.animate();
    },
    //动画
    animate(){
        this.ul.stop().animate({
            left:-this.li_width*this.nowIndex
        });
        var index=this.nowIndex==this.liIndex-1?0:this.nowIndex;
        this.btn_list.eq(index).addClass("active")
        .siblings("button").removeClass("active")
    },
    //自动轮播
    autoPlay(){
        var timer=setInterval(function(){
            this.next()
        }.bind(this),3000)
    },
    //停止轮播
    stop(){
        clearInterval(this.timer);
    }
})
//实例化对象
var banner=new Banner();
banner.init({
    btn_list:".hot-top-right2 .hot-top-circle2",
    li_list:".hot-down-li2"
})
banner.autoPlay();
