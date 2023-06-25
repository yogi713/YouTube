function sidebar(){
  const hidden = document.querySelector('.sidebar').classList.contains('sidebar-remove');
  console.log(hidden);
  if(!hidden){
    document.querySelector(".sidebar").classList.add("sidebar-remove");
    document.querySelector(".video-grid").classList.add("video-grid-move"); 
  }
  else{
    document.querySelector(".sidebar").classList.remove("sidebar-remove");
    document.querySelector(".video-grid").classList.remove("video-grid-move"); 
  }
}