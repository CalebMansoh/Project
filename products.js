const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase()
  const storeitems = document.getElementById("products")
  const products = document.querySelectorAll(".fruits") 
  const pname = storeitems.getElementsByTagName("h2")

  for(var i=0; i< pname.length; i++){
    let match = products[i].getElementsByTagName("h2")[0]

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
        products[i].style.display = "";
      }else{
        products[i].style.display = "none";
      }
    }
  }
}