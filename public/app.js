$('#app').html

setTimeout(function(){
mvp();
},3000);


function mvp(){
		
		$.ajax({
			url:"https://api.spotify.com/v1/search?q=artist:ariana%20grande&type=album"
		}).done(function(response){
			$.ajax({
				url:response.albums.items[0].href
			}).done(function(album){
				console.log(album);
				let name = response.albums.items[0].artists[0].name;
				let image = response.albums.items[0].images[0].url;
				let mp3 = album.tracks.items[0].preview_url;
				let html = `<h1>${name}</h1>
							<img src="${image}"/>
							<h1>
							<audio controls>
								<source src="${mp3}" type="audio/mpeg">
								Your browser does not support your element.
							</audio>
							</h1>
				`;	
				$('#app').html(html);
			});
		});
}
