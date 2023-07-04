function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(document.getElementById("email").addEventListener("change", function(event){
    if(event.target.value === undefined || event.target.value.trim() === ''){
        if(!event.target.classList.contains("empty-input")){
            event.target.classList.add('empty-input');
        }
    }else{
        if(event.target.classList.contains("empty-input")){
            event.target.classList.remove("empty-input");
        }
    }
  }))