<template>
    <div class = "wrapper">
        <p>姓名：琪亚娜·卡斯兰娜</p>
        <p>年龄：16岁</p>
        <p>装甲：女武神·游侠</p>
        <p>作战方式：枪斗术</p>
        <img src = "../assets/equipLogo.png" width = "250px" height = "250px">
        <div class="content-wrap">
            <h1 class="iflyfromright">角色介绍</h1>
            <h2 class="iflyfromright">Role Introduction</h2>
            <h3 id="valkyria-story-name" class="iflyfromright">女武神·游侠</h3>
            <p id="valkyria-story" class="flyfromright">「女武神·游侠」是琪亚娜·卡斯兰娜在在圣芙蕾雅学园的学园制服。<br><br>这套「机械」属性的远程制服靠拉开与敌人的距离来制造输出的机会。<br><br>琪亚娜可在远处向敌人进行连续射击，射击的伤害会逐渐升高。还可以在三连枪击后进行蓄力，从而发动「陨石冲击」，制造更为强力的一击。<br><br>当敌人处于被冰冻的状态时，「女武神·游侠」出场即对单体疯狂射击，造成大量伤害。<br><br>必杀技「星云冲击」可传送女武神重炮，轰击前方敌人，并将敌人击晕。<br><br>「女武神·游侠」在完美闪避之后，不会直接触发时空断裂，而是制造一个黑洞般的「时空奇点」，将敌人吸引过去，同时提升己方的移动速度。</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "equipments"
};
</script>

<style scoped>
.wrapper {
    background-image: url("../assets/bgg.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

h1,h2,h3,p {
    width: 100%;
    text-align: center;
    color: #ccc;
}

h3 {
    color: #33f;
}

p {
    font-size: 20px;
    margin-top: 10px;
}

h3 {
    font-size: 30px;
}

h2 {
    font-size: 35px;
}

h1 {
    font-size: 50px;
}
</style>
