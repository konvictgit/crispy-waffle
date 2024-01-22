let obj ={
    name:"sonal",
    

    x:  function  name() {
        
        console.log(this);
         (function ax() {
            console.log(this);
        })()
    }

}


obj.x();