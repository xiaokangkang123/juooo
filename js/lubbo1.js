function Banner(){}
    $.extend(Banner.prototype,{
        //初始化
        init:function(options){
            //选择元素
            
            this.li_list=$(options.li_list);
            this.left_btn=$(options.left_btn);
            this.right_btn=$(options.right_btn);
            this.ul=$(".-banner-ul");
            this.wrap=$(".-banner");
            //当前下标
            this.nowIndex=0;
            //li_list的长度
            this.liIndex=this.li_list.length;
            //元素的宽度
            this.li_width=this.li_list.width();
            
            
                //调用核心功能
                this.bindEvent();
            
        },
        //绑定事件
        bindEvent:function(){
            this.left_btn.click($.proxy(this.forward,this))
            this.right_btn.click($.proxy(this.next,this))
            // this.btn_list.mouseover($.proxy(this.toIndex,this))
            // this.wrap.mouseenter($.proxy(this.stop,this))
            // this.wrap.mouseleave($.proxy(this.autoPlay,this))
        },
        //上一张图片
        forward:function(){
            console.log(1)
            if(this.nowIndex==0){
                this.nowIndex=this.liIndex-2;
                this.ul.css({
                    left:-(this.li_width)*this.nowIndex
                })
            }else{
                this.nowIndex--;
            }
            this.animate();
        },
        //下一张图片
        next:function(){
            if(this.nowIndex==this.liIndex-1){
                this.nowIndex=1;
                this.ul.css({
                    left:0
                })
            }else{
                this.nowIndex++;
            }
            this.animate();
        },
        
        //到哪张
        toIndex:function(event){
            //在jquery中，事件对象已经存在，不需要获取事件对象
            var target=event.target||event.srcElement;
            this.nowIndex=$(target).index();                
            this.animate();
        },
        //停止轮播
        stop:function(){
            clearInterval(this.timer);
        },
        //动画
        animate:function(){
            this.ul.stop().animate({
                left:-this.li_width*this.nowIndex
            })
            // var index=this.nowIndex==this.liIndex-1?0:this.nowIndex;
            // this.btn_list.eq(index).addClass("active_4")
            // .siblings(".down_btn1").removeClass("active_4");
        },
        //自动播放
        autoPlay:function(){
            //建立定时器
            this.timer=setInterval(function(){
                this.next();
            }.bind(this),2000)
        }
    })
    //实例化对象
    var banner=new Banner();
    //开启程序
    banner.init({
        li_list:".banner-li2",
        left_btn:".left-btn",
        right_btn:".right-btn"
    })
    banner.autoPlay()
