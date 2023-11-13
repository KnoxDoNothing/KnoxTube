import { videos } from "../data/videos.js";

let videoHTML = `
<div class="video-preview js-video-preview ">

  <div class="thumbnail-row">
    <img class="thumbnail" src="images/thumbnails/thumbnail-1.webp"/>
    <div class="video-time">14:20</div>
  </div>

  <div class="video-info-grid">
    <div class="channel-picture">
      <img
        class="profile-picture"
        src="images/channel-pictures/channel-1.jpeg"
        alt=""
      />
    </div>

    <div class="video-info js-video-info">
      <p class="video-title">
        Talking Tech and AI with Google CEO Sundar Pichai!
      </p>

      <p class="video-author">Marques Brownlee</p>

      <p class="video-stats">3.4M views &#183; 6 months ago</p>
    </div>

  </div>
</div>


<video class="thumbnail" controls controlslist="nodownload">
    <source src="videos/cat.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<video class="thumbnail" controls controlslist="nodownload">
    <source src="videos/cat.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
`
;

document.querySelector('.js-video-grid').innerHTML = videoHTML;

document.querySelectorAll('.js-video-preview ').forEach(thumbnail=>{
  thumbnail.addEventListener('click',()=>{
    console.log('ok');
  });
})



