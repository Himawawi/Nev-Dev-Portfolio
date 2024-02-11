const projectHeaders = document.querySelectorAll(".project-header");

projectHeaders.forEach(projectHeader => {
    projectHeader.addEventListener("click", event => {
        projectHeader.classList.toggle("active");
        const projectBody = projectHeader.nextElementSibling;

        if(projectHeader.classList.contains("active")){
            projectBody.style.maxHeight = projectBody.scrollHeight + "px";
        }
        else {
            projectBody.style.maxHeight = 0;
        }
    });
});

var bfIndex = 0;

function sliderAnimationBf(){
    setTimeout(sliderAnimationBf, 2000);

    var pics;
    const img = document.querySelectorAll('.project-thumbnail.bf');
    for(pics = 0; pics < img.length; pics++){
        img[pics].style.display="none";
    }

    bfIndex++;
    if(bfIndex > img.length){
        bfIndex = 1;
    }
    img[bfIndex - 1].style.display="block";
}
sliderAnimationBf();

var fbIndex = 0;

function sliderAnimationFb(){
    setTimeout(sliderAnimationFb, 2000);

    var pics;
    const img = document.querySelectorAll('.project-thumbnail.fb');
    for(pics = 0; pics < img.length; pics++){
        img[pics].style.display="none";
    }

    fbIndex++;
    if(fbIndex > img.length){
        fbIndex = 1;
    }
    img[fbIndex - 1].style.display="block";
}
sliderAnimationFb();

var teIndex = 0;

function sliderAnimationTe(){
    setTimeout(sliderAnimationTe, 2000);

    var pics;
    const img = document.querySelectorAll('.project-thumbnail.te');
    for(pics = 0; pics < img.length; pics++){
        img[pics].style.display="none";
    }

    teIndex++;
    if(teIndex > img.length){
        teIndex = 1;
    }
    img[teIndex - 1].style.display="block";
}
sliderAnimationTe();

var nmIndex = 0;

function sliderAnimationNm(){
    setTimeout(sliderAnimationNm, 2000);

    var pics;
    const img = document.querySelectorAll('.project-thumbnail.nm');
    for(pics = 0; pics < img.length; pics++){
        img[pics].style.display="none";
    }

    nmIndex++;
    if(nmIndex > img.length){
        nmIndex = 1;
    }
    img[nmIndex - 1].style.display="block";
}
sliderAnimationNm();