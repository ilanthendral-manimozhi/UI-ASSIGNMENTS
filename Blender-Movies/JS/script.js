let poster=[
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]
let videoJson=[{
    "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title" : "Sintel",
    "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments" : [
        {
            "name" : "Micheal Scott",
            "image": "assets/images/micheal.png",
            "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "assets/images/dwight.png",
            "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name" : "Jim Halpert",
            "image" : "assets/images/jim.png",
            "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name" : "Pam Beesly Halpert",
            "image" : "assets/images/pam.png",
            "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name" : "Angela Martin",
            "image" : "assets/images/angela.png",
            "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name" : "Kevin Malone",
            "image" : "assets/images/kevin.png",
            "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name" : "Andy Bernard",
            "image": "assets/images/andy.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
}
]
videoJson.map((value) =>{
const video_element=document.createElement('video');
video_element.setAttribute('src', value.videoUrl);
video_element.controls = true;
video_element.muted = false;
video_element.poster='assets/images/vid.png';
const parent_vid=document.getElementById("video-container");
parent_vid.appendChild(video_element);
const video_describtion=document.createElement('p');
video_describtion.setAttribute('class','text-content');
const describtion=document.createTextNode(value.description);
const text_content_video=document.getElementById("video-text-container");
const vid_title=document.createElement('h4');
vid_title.setAttribute('class','title');
const title=document.createTextNode(value.title);
vid_title.appendChild(title)
text_content_video.appendChild(vid_title);
video_describtion.appendChild(describtion);
text_content_video.appendChild(video_describtion);
value.comments.map((about)=>{
const comment_section=document.getElementById("comment-section");
const character=document.createElement('div');
character.setAttribute("class","reviewer");
const profile_container=document.createElement('div');
profile_container.setAttribute('class','profile_container');
const profile=document.createElement('img');
profile.setAttribute('src',about.image);
profile.setAttribute('class','profile');
const fullname=document.createElement("p");
fullname.setAttribute('class','name');
const name=document.createTextNode(about.name);
const rev_idv=document.createElement('p');
rev_idv.setAttribute('class','comment');
const cmt=document.createTextNode(about.comment);
const cmt_txt=document.createElement('div');
cmt_txt.setAttribute('class','cmt-txt');
comment_section.appendChild(character);
character.appendChild(cmt_txt);
character.appendChild(profile);
fullname.appendChild(name);
cmt_txt.appendChild(fullname);
rev_idv.appendChild(cmt);
cmt_txt.appendChild(rev_idv);
});
});
poster.map((release)=>{
    const upcoming=document.getElementById('right-container');
    const project=document.createElement('div');
    project.setAttribute('class','project');
    upcoming.appendChild(project);
    const pro_poster=document.createElement('img');
    pro_poster.setAttribute('src',release.imageUrl);
    project.appendChild(pro_poster);
    

});
