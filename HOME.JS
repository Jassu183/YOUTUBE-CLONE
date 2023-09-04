// var menuIcon=document.querySelector(".menu-icon")
// var sidebar=document.querySelector(".sidebar")
// var container=document.querySelector(".container")
// menuIcon.onclick=function(){
//     sidebar.classList.toggle("small-sidebar")
//     container.classList.toggle("large-container")
// }

const API_KEY = 'AIzaSyBiGV1dmxIysPICkz4k9rj-aElMwtu5dmU';
const videoListApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

const getVideoList = async()=>{
    const fetchData = await fetch(videoListApi);
    const videoData = await fetchData.json();
    console.log(videoData);
    createVideoList(videoData.items);
   
}
getVideoList();


// to get the each video avatar we r using another channel api
const getChannelInfo = async channelId => {
    const channelInfoApi = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
    
    const response = await fetch(channelInfoApi);
    const data = await response.json();
    
    return data.items[0]; // Return the channel information
};




const createVideoList = async items => {
    for (const obj of items) {
        const channelInfo = await getChannelInfo(obj.snippet.channelId);
        const avatarUrl = channelInfo.snippet.thumbnails.default.url;
        
       const element = `<div class="vid-list">
        <a href="play-video.html?v=${obj.id}"><img src="${obj.snippet.thumbnails.medium.url}" class="thumbnail" /></a>
        <div class="flex-div">
            <img src="${avatarUrl}" />
            <div class="vid-info">
                <a href="play-video.html?v=${obj.id}">${obj.snippet.title}</a>
                <p>${obj.snippet.channelTitle}</p>
                <p>${obj.statistics.viewCount} views &bull; in 1 days </p>
            </div>
        </div>
    </div>`
    document.getElementsByClassName("list-container")[0].innerHTML +=element;
    };
}

