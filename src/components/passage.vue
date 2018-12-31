<template>
    <div v-if="post.attributes" class = "wrapper">
        <div class = "passage">
            <div class = "passageTitle">
                {{ post.attributes.title }}
            </div>
            <div class = "passageContent" v-html = post.attributes.content></div>
        </div>

        <div class = "comments">
            <ol class = "commentList">
                <li v-for="comment in comments">
                    <div class = "comment">
                        {{comment.name}}:{{comment.content}}
                    </div>
                </li>
            </ol>
            <form id = "postMessageForm">
                <input type = "text" name = "userName" placeholder = "请输入您的昵称">
                <input type = "text" name = "content" placeholder = "请输入您想说的话">
                <input type = "submit" value = "提交" v-on:click = "submitData">
            </form>
            <div class = "warning">
                <div id = "nameWarning">昵称不能为空！</div>
                <div id = "contentWarning">内容不能为空！</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "passage",
    data() {
        return {
            post:[],
            comments:[]
        }
    },
    methods: {
        getData() {
            var query = new AV.Query('forum');
           
            query.get(this.$route.params.id).then(todo => {
                this.post = todo;
                this.comments = JSON.parse(this.post.attributes.comments);
                //console.log(this.post.attributes.comments)
            });
        },
        submitData(e) {
            e.preventDefault();
            var name = postMessageForm.querySelector("input[name = userName]").value;
            var content = postMessageForm.querySelector("input[name = content]").value;
            
            nameWarning.classList.remove("active");
            contentWarning.classList.remove("active");
            if(name === "" || name.replace(/ /g, "") === ""){
                nameWarning.classList.add("active");
                return;
            }else{
                if(content === "" || content.replace(/ /g, "") === ""){
                    contentWarning.classList.add("active");
                    return;
                }
            }

            var query = new AV.Query('forum');
            query.get(this.$route.params.id).then(ss => {
                this.post = ss;
                var todo = AV.Object.createWithoutData('forum', this.$route.params.id);
                var data = {
                    "name": name,
                    "content": content
                }

                var oldComments = this.post.attributes.comments;
                var newComments; 
                if(oldComments){
                    newComments = oldComments.substring(0,oldComments.length-1) + "," + JSON.stringify(data) + "]";
                }else{
                    newComments = "[" + JSON.stringify(data) + "]";
                }
                //console.log(JSON.parse(newComments))
                todo.set('comments', newComments);
                todo.save().then(xx => {
                    this.comments = JSON.parse(newComments);
                    postMessageForm.querySelector("input[name = userName]").value = "";
                    postMessageForm.querySelector("input[name = content]").value = "";
                });
            });  
        }
    },
    created(){
        this.getData();
    }
};
</script>

<style scoped>
ol,li {
    list-style: none;
}

.wrapper {
    width: 100%;
    height: 100%;   
    min-height: calc(100vh-2px);
    background-color: #ddd; 
    padding-top: 1px;
    padding-bottom: 1px;
    background-image: url("../assets/bg1.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;    
}

.passage {
    width: 80%;   
    margin-left: 10%;
    margin-top: 100px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.passageTitle {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: bolder;
}

.passageContent {
    width: 100%;
    padding-left: 30px;
}

.comments {
    width: 80%;   
    margin-left: 10%;
    margin-top: 50px;
    margin-bottom: 100px;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
}

.commentList {
    display: flex;
    flex-wrap: wrap;
}

.commentList li {
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px 20px;

}

#postMessageForm {
    padding-top: 30px;
}

.warning {
    display: flex;
    color: white;
}

.warning .active{
    color: red;
    transition: all 0.2s;
}

#contentWarning {
    margin-left: 66px;
}
</style>

