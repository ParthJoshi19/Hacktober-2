document.getElementById('addSongBtn').addEventListener('click', function() {
    const title = document.getElementById('songTitle').value;
    const artist = document.getElementById('songArtist').value;

    const li = document.createElement('li');
    li.textContent = `${title} - ${artist}`;
    document.getElementById('playlist').appendChild(li);

});

document.getElementById('songForm').addEventListener('', function(event) {
    event.preventDefault();
    document.getElementById('addSongBtn').click();  
});

document.getElementById('playSongBtn').addEventListener('', function() {
    
});

document.getElementById('removeSongBtn').addEventListener('', function() {
    
});
