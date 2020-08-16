let inputSong=()=>{
    let inputValue=document.getElementById('search-box').value;
    return inputValue;
}
function findSong(){
    fetch(`https://api.lyrics.ovh/suggest/${inputSong()}`)
    .then(res=>res.json())
    .then(data=>{

        
        // const countSong=captureSong.length;
        // console.log(countSong);
        for(let i=0;i<10;i++){
            const captureSong=data.data[i].title;
            const songBy=data.data[i].artist.name;
            const searchresult=document.createElement('p');
            const suggestSong=`${captureSong} by ${songBy}`;
            searchresult.innerText=suggestSong;
            const div=document.getElementById('suggest');
            div.appendChild(searchresult);


        
        }
        
    })
}
