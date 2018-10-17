function waterFall(){}
$.extend(waterFall.prototype,{
    // 初始化
    init(){
        this.page=1;
        this.main=$("#list");
        this.loading=false;
        
        this.loadJson()
        .done(function(res){
            this.renderPage(res)
        })
        this.bindEvent();
    },
    // 加载数据
    loadJson(){
        var opt = {
            // 链接接口
            url:"http://www.wookmark.com/api/json/popular",
            // 预期服务器返回的数据类型
            dataType:"jsonp",
            // 发送到服务器的数据。将自动转换为请求字符串格式
            data:{page:this.page},
            // this => 指向实例化对象;
            //检测上下文
            context:this
        }
        return $.ajax(opt);
    },
    //渲染页面
    renderPage(json){
        var html="";
        for(i=0;i<json.length;i++){
            // console.log(data[i].image,data[i].title,data[i].price)
            html+=`
            <li class="render-li clearfix">
                <div class="render-li-left">
                    <img src="${json[i].image}" alt="" class="render-img">
                </div>
                <div class="render-li-center">
                    <p class="render-center-p">
                        <a href="../detail.html" class="render-center-a">
                            OLive橄榄现场呈现·2018杨乃文“BACK TO FAITH+”信念回归巡回演唱会
                        </a>
                    </p>
                    <p class="render-center-p2">时 间：2018.10.17 20:00</p>
                    <p class="render-center-p2">场 馆： [重庆] 重庆江南体育中心体育馆</p>
                    <p class="render-center-p2">
                        <span class="render-center-span1">票价：￥</span>
                        <span class="render-center-span2">280~888</span>
                    </p>
                </div>
                <div class="render-li-right">
                    <span class="render-right-span1">立即购票</span>
                    <span class="render-right-span2">+ 关注</span>
                </div>
            </li> `
            
        }
        this.main.html(this.main.html() + html);
        this.loading = true;
    },
    // 绑定事件
    bindEvent(){
        $(window).on("scroll",this.ifLoad.bind(this));
    },
    ifLoad(){
        // console.log(1);
        // scrollTop ;
        // 最后一张图片;
        // 当前屏幕的高度;
        // console.log(this.ifLoad)
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        this.loading = false;
        // console.log(scrollTop,clientHeight,lastBox.offset());
        if(scrollTop + clientHeight > lastBox.offset().top){
            // 加载数据;
            if(this.loading){
                return 0;
            }
            this.loading = true;
            // console.log("加载");
            this.page ++;
            this.loadJson()
            .done(function(res){
                // deferred 的 done 回调 this指向的都是 jquery 对象本身
                // console.log(res,this);
                this.renderPage(res);
            })
        }
    }
})
var waterfall = new waterFall();
waterfall.init();