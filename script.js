
//input box
let inputSong=()=>{
    document.getElementById('suggest-area').innerText='';
    document.getElementById('lyrics-area').innerText='';
    let inputValue=document.getElementById('search-box').value;
    return inputValue;
}


//search song
function findSong(){
    fetch(`https://api.lyrics.ovh/suggest/${inputSong()}`)
    .then(res=>res.json())
    .then(data=>{

        for(let i=0;i<10;i++){
            const songTitle=data.data[i].title;
            const songArtist=data.data[i].artist.name;
            const songList=document.createElement('div');
      
        songList.innerHTML+=` <div class="single-result row align-items-center my-3 p-3 id="song-div">
        <div class="col-md-9">
            <h3 class="lyrics-name">${songTitle}</h3>
            <p class="author lead">Album by <span>${songArtist}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success" onclick="findLyrics('${songArtist}','${songTitle}')">Get Lyrics</button>
        </div>
        </div>`;
        console.log(songArtist,songTitle);
        const div=document.getElementById('suggest-area');
           div.appendChild(songList);         
        }
        
    })
}

//to get lyrics
function findLyrics(artist,title){
    console.log(artist,title);
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res=>res.json())
    .then(data=>{
        const lyricsType=data.lyrics;
        console.log(typeof(lyricsType));
        if(typeof(lyricsType)!='string'){
            alert('lyrics cannot found');
        }
        else{
            const songLyrics=document.getElementById('lyrics-area').innerText=data.lyrics;
        }
       
    })
    .catch(error=>console.log(error));
}


