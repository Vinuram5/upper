
        const box=()=>{
      const searchbox = document.getElementById("search").value.toUpperCase();
      const items = document.getElementById("product-list")
      const products = document.querySelectorAll("#products")
      const pname = items.getElementsByTagName("h2")

      for(var i=0; i<pname.length; i++){
        let match = products[i].getElementsByTagName("h2")[0];

        if(match)
        {
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                products[i].style.display = "";

            } else{
                products[i].style.display = "none"
            }
        }
      }
    }

