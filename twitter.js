
const  fetchData = async()=>{
    try{

        const response  =  await fetch('https://jsonplaceholder.typicode.com/posts/')
        const posts = await response.json()
       return( document.querySelector("#finish").innerHTML= posts.map((values)=>{
                return`<div class="finals">
                <div >
                    <img src="images/profilepic.jpg" alt="" style="width: 50px;"> <p>${values.userid}<img src="images/check (1).png" alt="" id="check"></p>
                    <p>${values.title}</p>
                    <br>
                    <p>${values.body}</p>
                </div>
            </div>` }))
                  
    }catch(err){
        console.log(err)
    }
}
fetchData()