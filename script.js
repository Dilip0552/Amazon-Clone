function redirect_page(){
    search_value=document.getElementById("search-value")
    if(search_value.value.length>0){
        search_value.replace(" ", "+")
        // window.location.href = "https://www.amazon.in/s?k=" + search_value.value
        window.location.href="https://www.google.com"
        }
    
    // redirect_link=document.getElementById("redirect-value")
}