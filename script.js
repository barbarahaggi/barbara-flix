var listaSeries = [
    "https://m.media-amazon.com/images/M/MV5BMjEwMDgzNjA1Ml5BMl5BanBnXkFtZTgwNjYyNDUzMTI@._V1_.jpg",
    "https://static.posters.cz/image/750/postere/the-vampire-diaries-woods-i21244.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWUyYmMyMjktMmFjNC00ZGFiLThjODYtNjQ1MzQyODhmZmVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2021/09/the-sandman-dream-tom-sturridge-character-poster-netflix.jpg?resize=691,1024",
    "https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
  ];
  
  var listaLink = [
    "https://www.youtube.com/watch?v=J3VmoVQRv6A",
    "https://www.youtube.com/watch?v=GLjxcX9oMlY&t=6s",
    "https://www.youtube.com/watch?v=znds8S2kKg4",
    "https://www.youtube.com/watch?v=DDeSVVZ8h-Q&t=7s",
    "https://www.youtube.com/watch?v=R7d7aynMtso&t=15s"
  ];
  
  for (var i = 0; i < listaSeries.length; i++) {
    document.write(
      "<a href=" + listaLink[i] + ">  <img src=" + listaSeries[i] + ">  </a>"
    );
  }
  