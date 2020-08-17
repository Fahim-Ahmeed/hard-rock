let inputSong=()=>{
    let inputValue=document.getElementById('search-box').value;
    return inputValue;
}
function findSong(){
    fetch(`https://api.lyrics.ovh/suggest/${inputSong()}`)
    .then(res=>res.json())
    .then(data=>{

        for(let i=0;i<10;i++){
            const captureSong=data.data[i].title;
            const songBy=data.data[i].artist.name;
           const songList=document.createElement('div');
        //    const songWithTitle=`${captureSong} album by ${songBy}`;
        //    songList.innerText=songWithTitle;
        songList.innerHTML+=` <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${captureSong}</h3>
            <p class="author lead">Album by <span>${songBy}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        </div>`;
        
           const div=document.getElementById('suggest-area');
           div.appendChild(songList);         
        }
        
    })
}
// div.appendChild(suggestList);
// const div=document.getElementById('suggest-area');
// let suggestList=document.getElementById('suggest-item');
// const songTitle=document.getElementById('song-title').innerText=captureSong;
// const songName=document.getElementById('song-name').innerText=songBy; 