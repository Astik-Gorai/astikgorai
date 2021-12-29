// console.log("Hi wecome to the world ")
document.querySelector(".cross").style.display ='none';
document.querySelector(".options").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains(sidebarGo)){
        document.querySelector(".ham").style.display='inline';
        document.querySelector(".cross").style.display="none";
    }
    else{
        document.querySelector(".ham").style.display='none';
        document.querySelector(".cross").style.display="inline";
    }
})
// document.querySelector(".options").addEventListener("click",myChange())
// function myChange(){
//     document.querySelector(".sidebar").classList.toggle(".sidebarGo");
// }
document.querySelector(".smallbtn1").addEventListener("click",downloadMyCv());
function downloadMyCv(){
    
}