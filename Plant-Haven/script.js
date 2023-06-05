var current=1
var carousel=document.getElementsByClassName('item');
let perf=110;
document.getElementsByTagName('input')[0].blur()
var text=document.querySelector(".carousel-button-container p");
var sidemenu=document.getElementsByClassName('menu-outline-button')[0];

sidemenu.addEventListener('click',()=>{
    if(document.getElementsByClassName('navigation-middle')[0].style.display!="flex"){
        document.getElementsByClassName('navigation-middle')[0].style.display="flex"
        document.getElementsByClassName('navigatiion-heading')[0].style.position="absolute"
        document.getElementsByClassName('navigatiion-heading')[0].style.left="96px";
        
    }
    else{
        document.getElementsByClassName('navigation-middle')[0].style.display=""
        document.getElementsByClassName('navigatiion-heading')[0].style.position=""
        document.getElementsByClassName('navigatiion-heading')[0].style.left=25+"%";
    }
})
window.onload=()=>{
    if(window.innerWidth<=1008){
        document.querySelector('.section-hero>div:nth-child(1)>img').src='./images/background-1.png'
            }
    else{
       
        document.querySelector('.section-hero>div:nth-child(1)>img').src='./images/background.png'
        }
}

for (i=0;i<carousel.length;i++){
    if(i==current-1){
        carousel[i].style.left="50%";
        carousel[i].style.top="50%";
        carousel[i].style.opacity="1";
        carousel[i].children[0].childNodes[1].style.scale="1.8";

        text.innerText=carousel[i].children[0].childNodes[3].firstElementChild.innerText
    }
    else{
        carousel[i].style.left=perf+"rem";
        carousel[i].style.top="50%";
    perf=perf+60;
    carousel[i].style.scale="0.7";
    carousel[i].style.opacity="0.5";
    }
    
       
}
function prev(){
    if(current!=1){
        current=current-1
        let per=110;
        for (i=current-1;i<carousel.length;i++){
            if(i==current-1){
                carousel[i].style.left="50%";
                carousel[i].style.scale="1";
                carousel[i].style.opacity="1";
                carousel[i].children[0].childNodes[1].style.scale="1.8";
                text.innerText=carousel[i].children[0].childNodes[3].firstElementChild.innerText
            }
            else{
               
                carousel[i].style.left=per+"rem";
                console.log(per+"rem")
                carousel[i].style.scale="0.7";
                carousel[i].style.opacity="0.5";
                carousel[i].children[0].childNodes[1].style.scale="1"
                per=per+60;
            }
        }
        let per1=0;
        for (i=current-1-1;i>=0;i--){
            
                carousel[i].style.left=per1+"rem";
                carousel[i].style.scale="0.7";
                carousel[i].style.opacity="0.5";
                carousel[i].children[0].childNodes[1].style.scale="1"
                per1=per1-60;
            console.log(carousel,i)
            
    }
}
   
    

    
}
function next(){
    if(current<3){
        current=current+1
        let per=110;
        for (i=current-1;i<carousel.length;i++){
            if(i==current-1){
                carousel[i].style.left="50%";
                carousel[i].style.scale="1";
                carousel[i].style.opacity="1";
                carousel[i].children[0].childNodes[1].style.scale="1.8"
                text.innerText=carousel[i].children[0].childNodes[3].firstElementChild.innerText
            }
            else{
               
                carousel[i].style.left=per+"rem";
                console.log(per+"rem")
                carousel[i].style.scale="0.7";
                carousel[i].style.opacity="0.5";
                carousel[i].children[0].childNodes[1].style.scale="1"
                per=per+60;
            }
        }
        let per1=0;
        for (i=current-1-1;i>=0;i--){
            
                carousel[i].style.left=per1+"rem";
                carousel[i].style.scale="0.7";
                carousel[i].style.opacity="0.5";
                carousel[i].children[0].childNodes[1].style.scale="1"
                per1=per1-60;
            console.log(carousel,i)
            
        }
    
    }

   
    
}








function explore(){
    document.getElementById('our-plants-section').scrollIntoView({behavior: 'smooth',block:"center"});
}


addEventListener("resize",(e)=>{
    if(window.innerWidth<=800){
        if(document.getElementsByClassName('navigation-middle')[0].style.display=="flex"){
            document.getElementsByClassName('navigatiion-heading')[0].style.left="96px"
            document.getElementsByClassName('navigatiion-heading')[0].style.position="absolute"
        }
    }
    if(window.innerWidth>=624){
        document.getElementsByClassName('last-section-heading')[0].childNodes[3].style.display="";
        document.getElementsByClassName('last-section-heading')[0].childNodes[1].style.display="";
    }
    if(window.innerWidth<=1008){
document.querySelector('.section-hero>div:nth-child(1)>img').src='./images/background-1.png'
       
}
    else{

        document.getElementsByClassName('navigatiion-heading')[0].style.position="static"
        document.querySelector('.section-hero>div:nth-child(1)>img').src='./images/background.png'
    }
})

function enabledropdown(event){
    if(window.innerWidth<=624){
        if(event.target.nextElementSibling.style.height=='47px'){
            event.target.nextElementSibling.style.height=""
            
            event.target.childNodes[3].style.display="none"
            
        }
        else{
            event.target.childNodes[1].style.display="none"
            event.target.childNodes[3].style.display="inline-flex"
            event.target.nextElementSibling.style.height='47px'
        }
    }
   
}


function tohome(){
    document.getElementById('section-hero-id').scrollIntoView({behavior:"smooth",block:"center"})
}

function toplants(){
    document.getElementById('our-plants-section').scrollIntoView({behavior:"smooth",block:"center"})
}

function toservices(){
    document.getElementsByClassName('container about-last')[0].scrollIntoView({behavior:"smooth",block:"center"})
}
function tocare(){
    document.getElementsByClassName('testimonial-section')[0].scrollIntoView({behavior:"smooth",block:"center"})
}