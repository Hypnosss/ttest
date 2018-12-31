<template>
    <div>
        <div class="window">
            <div id="images">
                <img src = "../assets/imgs/1.jpg" alt = "img1" width = "500px">
                <router-link
                :to = "{
                    name:'equipments',
                    params:{
                        id:1
                    }
                }">
                    <img src = "../assets/imgs/2.jpg" alt = "img2" width = "500px" height="500px">
                </router-link>
                <img src = "../assets/imgs/3.jpg" alt = "img3" width = "500px">
                <img src = "../assets/imgs/4.jpg" alt = "img3" width = "500px">
            </div>
        </div>   
        <span id="buttons">
            <span>白骑士·月光</span>
            <span>女武神·游侠</span>
            <span>脉冲装·绯红</span>
            <span>次元边界突破</span>
        </span>
    </div>       
</template>

<script>
export default {
    name: "equipment",
    methods:{
        test() {
            let allButtons = $("#buttons > span");
            var n = 0;

            //点击对应按钮跳转图片
            for(let i = 0; i < allButtons.length; i++){
                $(allButtons[i]).on("click",function(x){
                n = $(x.currentTarget).index();
                    $("#images").css({
                        transform:"translateX(" + -500 * $(x.currentTarget).index() + "px)"
                    })
                })
            }

            //自动轮播
            var setTimer = setInterval(function(){
                $(allButtons[n % allButtons.length]).trigger("click");
                n++;
                }, 2000);

            //鼠标移入/移出时打断/继续轮播
            $(".window,#buttons").on("mouseenter",function(){
                window.clearInterval(setTimer);
                //console.log("enter");
            })

            $(".window,#buttons").on("mouseleave",function(){
                setTimer = setInterval(function(){
                    $(allButtons[n % allButtons.length]).trigger("click");
                    n++;
                    }, 2000);
                //console.log("leave");
            })
        }
    },
    mounted() {
        this.test();
    }
};
</script>

<style scoped>
.window{
    width: 500px;
    overflow: hidden;
}

#images{
    display: flex;
    align-items: flex-start;
    transition: 0.5s all;
}

#buttons span {
    margin-left: 20px;
}
</style>
