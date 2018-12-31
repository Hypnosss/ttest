<template>
    <div class = "wrapper">
        <div id = "siteLoading" class = "siteWelcome active" v-if = "posts==''">
            <div class="loading"></div>
        </div>

        <div class = "titlesWrapper">
                <router-link v-for = "post in posts"
                :key="post.id"
                :to = "{
                    name:'passage',
                    params:{
                        id:post.id
                    }
                }">
                    <li class = "post"> 
                        {{ post.attributes.title }}
                    </li>
                </router-link>
        </div> 
        <div class = "pagesWrapper">
            <pages @handle="renderList"></pages>
        </div>  
    </div>
</template>

<script>
import Pages from './pages';
export default {
    name: "forum",
    components:{
        Pages
    },
    data() {
        return {
            posts: [],
            postPage: 1,
        }   
    },
    methods: {
        getData() {
            var query = new AV.Query('forum');

            //console.log(2*this.postPage)
            query.skip(2*this.postPage - 2).limit(2).find().then(passage => {
                //console.log(passage);
                this.posts = passage;
            });
        },
        renderList(value){
            //console.log("p"+this.postPage)
            this.postPage = value;
            this.getData();
        }
    },
    created(){
        this.getData();
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}

li {
    list-style: none;
}

.wrapper {
    height: 100%;
    min-height: calc(100vh - 1px);
    background-image: url("../assets/bg2.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    padding-top: 1px;
}

.siteWelcome{
    display: none;
    position: fixed;
    top: 0;  
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color:#888;
    justify-content: center;
    align-items: center;
}

.siteWelcome.active{
    display: flex;
}

.loading{
    width: 200px;
    height: 200px;
    position: relative;
}

.loading::before,.loading::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #000;
    border-radius: 50%;
    animation: diffusion 1s linear infinite;
}

.loading::after{
    animation-delay: 0.5s;
}

@keyframes diffusion{
    0%{
        height: 0;
        width: 0;  
        opacity: 1;
    }
    100%{
        height: 100px;
        width: 100px;
        opacity: 0;
    }
}



.titlesWrapper {
    width: 80%;
    background-color: rgba(255,255,255,0.8);
    margin-left: 10%;
    margin-top: 100px;
    font-size: 25px;
}

.post {
    padding: 10px 20px;
    border-bottom: 1px solid #aaa;
}

.post:hover {
    background-color: rgba(0,0,0,0.2);
}

.pagesWrapper {
    background-color: rgba(255,255,255,0.8); 
    width: 80%;
    margin-left: 10%;
    margin-top: 30px;   
}
</style>

