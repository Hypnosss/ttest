<template>
    <div class = "wrapper">
        <div class = "border">
            <div class = "equipmentButtonWrapper">
                <router-link :to="{
                    name:'equipmentsRoot'
                }">
                <img src = "../assets/equipLogo.png" width = "250px" height = "250px">
                <p>equip</p>
                </router-link>
            </div>
            <div class = "forumButtonWrapper">
                <router-link :to="{
                    name:'forum'
                }">
                <img src = "../assets/newsLogo.png" width = "250px" height = "250px">
                <p>forum</p>
                </router-link>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: "root"
};
</script>

<style scoped>
a {
    text-decoration: none;
}

.wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/bg0.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.border {
    border: 1px solid red;
    padding: 30px;
    background-color: rgba(255,255,255,0.8);
}

.equipmentButtonWrapper,.forumButtonWrapper {
    display: inline-block;
    text-align: center;
    background-color: rgba(255,255,255,0.4);
    padding: 20px;
}

.equipmentButtonWrapper:hover,.forumButtonWrapper:hover {
    background-color: rgba(0,0,0,0.3)
}

.equipmentButtonWrapper {
    margin-right: 50px;
}
</style>
