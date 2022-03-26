var data = [
    {type:"Foo", year:1995},
    {type:"Bar", year:1993},
    {type:"Foobar", year:2020}
    ];
    
    function sortArray(data){
        
        for(let i=0; i< data.length; i++){
        
            for(let j=0; j< data.length-1; j++){
              
            if(data[j].year > data[j+1].year){
                let temp = data[j] 
              data[j] = data[j+1]
              data[j+1] = temp
            }
                 
          }
        
        }
        
        return data
    }
    
    console.log(sortArray(data));