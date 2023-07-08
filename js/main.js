 
const teamList =document.querySelector(".team-list")

let members ="";

devs.map((item, index) => { 
    members +=` 
    
	<div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
    <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
    <span class="thumb-info-wrapper">
    <a href="about-me.html">
    <img src="${item.image}">
    <span class="thumb-info-title">
    <span class="thumb-info-inner">${item.name}</span>
    <span class="thumb-info-type">${item.skill}</span>
    </span>
    </a>
    </span>
    <span class="thumb-info-caption">
    <span class="thumb-info-caption-text">${item.discption}</span>
    <span class="thumb-info-social-icons mb-4">
    <a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i><span>Facebook</span></a>
    <a target="_blank" href="https://www.twitter.com/"><i class="fab fa-twitter"></i><span>Facebook</span></a>
    <a href="http://www.linkedin.com/"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a>
    </span>
    </span>
    </span>
    </div>
 
 `
});

teamList.innerHTML=members;