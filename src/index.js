module.exports = function check(str, bracketsConfig) {
    const holder = [];
    const open = [];
    const close = [];
    bracketsConfig.forEach((e) => {
      open.push(e[0]);
      close.push(e[1]);
    });
  
    for (let i of str) {      
      if (holder.includes(i) && close.includes(i)) {       
        holder.splice(-1, 1);
      } else if (open.includes(i)) {        
        holder.push(i);
      } else if (close.includes(i)) {       
        const openPair = open[close.indexOf(i)]; 
        if (holder[holder.length - 1] === openPair) {
         
          holder.splice(-1, 1); 
        } else {          
          holder.push(i);
          break; 
        }
      }
    }
    return holder.length === 0; 
  };
