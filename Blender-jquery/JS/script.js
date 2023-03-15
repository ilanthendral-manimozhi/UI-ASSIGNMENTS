
$.ajax({
    type: 'GET',
    url: 'https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0',
    dataType: 'json',
    timeout:100000000,
    success: (obj) => {
        videoJsonMap(obj);
    }
});

function videoJsonMap(value) {
    const $video_element = $('<video>');
    $video_element.get(0).play();
    $video_element.attr("src", value.videoUrl);
    $video_element.attr("poster","images/vid.png");
    $video_element.attr('controls', 'true');
    const $parent_vid = $("#video-container");
    $parent_vid.append($video_element);
    const $video_describtion = $('<p>');
    $video_describtion.attr('class', 'text-content');
    const $describtion = value.description;
    const $text_content_video = $("#video-text-container");
    const $vid_title = $('<h4>');
    $vid_title.attr('class', 'title');
    const $title =value.title;
    $vid_title.append($title)
    $text_content_video.append($vid_title);
    $video_describtion.append($describtion);
    $text_content_video.append($video_describtion);
    value.comments.map((about) => {
        const $comment_section = $("#comment-section");
        const $character = $('<div>');
        $character.attr("class", "reviewer");
        const $profile_container = $('<div>');
        $profile_container.attr('class', 'profile_container');
        const $profile = $('<img>');
        $profile.attr('src', about.image);
        $profile.attr('class', 'profile');
        const $fullname = $("<p>");
        $fullname.attr('class', 'name');
        const $name = about.name;
        const $rev_idv = $('<p>');
        $rev_idv.attr('class', 'comment');
        const $cmt =about.comment;
        const $cmt_txt = $('<div>');
        $cmt_txt.attr('class', 'cmt-txt');
        $comment_section.append($character);
        $character.append($cmt_txt);
        $character.append($profile);
        $fullname.append($name);
        $cmt_txt.append($fullname);
        $rev_idv.append($cmt);
        $cmt_txt.append($rev_idv);
    });
}


$.ajax({
    type: 'GET',
    url: 'https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346',
    dataType: 'json',
    success: (poster) => {
        posetMap(poster)
    }
});
function posetMap(poster) {
    poster.map((release) => {
        const upcoming = document.getElementById('right-container');
        const project = document.createElement('div');
        project.setAttribute('class', 'project');
        upcoming.appendChild(project);
        const pro_poster = document.createElement('img');
        pro_poster.setAttribute('src', release.imageUrl);
        project.appendChild(pro_poster);


    });

}