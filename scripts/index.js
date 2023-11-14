import { videos } from "../data/videos.js";

import { icons } from "./header.js";

import { logos } from "./sidebar.js";

let headerHTML=``;

icons.forEach(icon=>{
  headerHTML+=`
    <div class="middle-container">
      <img class="middle-icon" src=${icon.url} alt="" />
      <div class="tooltip">${icon.tooltip}</div>
    </div>
`;
})

let sidebarHTML=``;

logos.forEach(logo=>{
  sidebarHTML +=`
      <div class="sidebar-link">
        <img src=${logo.url} />
        <div>${logo.duration}</div>
      </div>
  
  `;

})


let videosHTML =``;


videos.forEach(video=>{
videosHTML += `
<div class="video-preview">

  <div class="thumbnail-row">
    <video class="video-thumbnail" controls controlslist="nodownload" >
      <source src=${video.url} type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="video-time">${video.time}</div>
  </div>

  <div class="video-info-grid">
    <div class="channel-picture">
      <img
        class="profile-picture"
        src=${video.img}
        alt=""
      />
    </div>

    <div class="video-info">
      <p class="video-title">
       ${video.title}
      </p>

      <p class="video-author">${video.author}</p>

      <p class="video-stats">${video.stats}</p>
    </div>

  </div>

</div>
`
})

headerHTML +=`<img class="current-user-picture" src="images/icons/headshot.png"/>`;
console.log(sidebarHTML);


document.querySelector('.js-right-section').innerHTML =headerHTML;
document.querySelector('.js-sidebar').innerHTML= sidebarHTML;
document.querySelector('.js-video-grid').innerHTML = videosHTML;


document.querySelectorAll('.js-video-preview ').forEach(thumbnail=>{
  thumbnail.addEventListener('click',()=>{
    console.log('ok');
  });
})
