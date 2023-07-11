const posts=[
    {title:"post1",body:"this is post1"},
    {title:"post2",body:"this is post2"}
]


let user={
    user1:"Rakesh",lastactivitytime:1
}


function getPost(){
    setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(post.title)
        });

        console.log(user.lastactivitytime);
    },0);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post)
            resolve();
        }, 1000);

    })
}



function updateTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.lastactivitytime=new Date()
            resolve();
        },2000);
    })
}

Promise.all([createPost({title:"post3",body:"this is post3"}),updateTime()])
.then(getPost)