let $ = document.querySelector.bind(document)
let main_box = $('.main-box')
let video = $('.video')
let play_pause_btn = $('.left')
let full_enter_exit_btn = $('.right')
let prograss = $('.prograss')
let current = $('.current')
let isFullScreen = false
play_pause_btn.addEventListener('click', function(){
    if(video.paused === true){
        video.play()
        this.classList.add('pause-btn')
        this.classList.remove('play-btn')
    }else{
        video.pause()
        this.classList.remove('pause-btn')
        this.classList.add('play-btn')
    }
})
full_enter_exit_btn.addEventListener('click', function(){
    if(isFullScreen === false){
        video.requestFullscreen()
        this.classList.add('full-screen-exit')
        this.classList.remove('full-screen-enter')
        isFullScreen = true
    }else{
        video.exitFullScreen()
        this.classList.remove('full-screen-exit')
        this.classList.add('full-screen-enter')
        isFullScreen = false
    }
})