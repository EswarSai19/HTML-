//store the products array in localstorage as "data"
    document.querySelector("#product_form").addEventListener("submit" ,StoredProducts)
var arr =   []
      function StoredProducts(){
       
          event.preventDefault();
          let form = document.querySelector("#product_form")
         let brand = form.product_brand.value;
         let name = form.product_name.value;
         let price = form.product_price.value;
         let image = form.product_image.value;
         let p1 = new Products(brand,name,price,image)
         console.log(p1)
         arr.push(p1)
         console.log(arr);
         localStorage.setItem("data", JSON.stringify(arr))
      }
     

      function Products(b,n,p,i){
        this.brand = b;
        this.name = n;
        this.price = p;
        this.image = i;
      }


