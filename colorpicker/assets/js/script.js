const cp1 = document.getElementById('picker1')
const cp2 = document.getElementById('picker2')
const cp3 = document.getElementById('picker3')
const less =  document.getElementById('less')
const great =  document.getElementById('great')
var pos = 0

var colorsSet = [
    {
        selector:"cp1",
        selectedColor:"#ffffff"
    },
    {   selector:"cp2",
        selectedColor:"#ffffff"
    },
    {   selector:"cp3",
        selectedColor:"#ffffff"
    }


]
// console.log(cp1);
cp2.style.display = 'none';
cp3.style.display = 'none';

less.addEventListener("click",()=>{
     if(pos===0)
         pos = 2
    else if(pos==1 || pos==2)
        pos = pos-1
    const lessSelectorFunc = (pos)=>{
        const currSelector = colorsSet[pos].selector;
        const currColor = colorsSet[pos].selectedColor;
        switch(currSelector){
            case 'cp1':
                cp1.style.display = 'block'
                cp2.style.display = 'none'
                cp3.style.display = 'none'
                document.body.style.backgroundColor = currColor;
                break;
            case 'cp2':
                cp2.style.display = 'block'
                cp1.style.display = 'none'
                cp3.style.display = 'none'
                document.body.style.backgroundColor = currColor;
                break;
            case 'cp3':
                cp3.style.display = 'block'
                cp1.style.display = 'none'
                cp2.style.display = 'none'
                document.body.style.backgroundColor = currColor;
                break;
        }
        // currSelector.style.display='block';
        
        

    }
    lessSelectorFunc(pos);
    
})

great.addEventListener("click",()=>{
    if(pos===2)
        pos = 0
    else if(pos===0 || pos===1)
        pos = pos+1        
        const greatSelectorFunc = (pos)=>{
            const currSelector = colorsSet[pos].selector;
            const currColor = colorsSet[pos].selectedColor;
            switch(currSelector){
                case 'cp1':
                    cp1.style.display = 'block'
                    cp2.style.display = 'none'
                    cp3.style.display = 'none'
                    document.body.style.backgroundColor = currColor;
                    break;
                case 'cp2':
                    cp2.style.display = 'block'
                    cp1.style.display = 'none'
                    cp3.style.display = 'none'
                    document.body.style.backgroundColor = currColor;
                    break;
                case 'cp3':
                    cp3.style.display = 'block'
                    cp1.style.display = 'none'
                    cp2.style.display = 'none'
                    document.body.style.backgroundColor = currColor;
                    break;
            }
}
greatSelectorFunc(pos);

})

console.log(colorsSet);


cp1.addEventListener("change",(e)=>{
     const color = e.target.value
     //colorsSet.cp1 = color;
     if(colorsSet[0]){
        colorsSet[0].selectedColor = color;
     }
     console.log(colorsSet);
     document.body.style.backgroundColor=color;

})
cp2.addEventListener("change",(e)=>{
    const color = e.target.value
    if(colorsSet[1]){
        colorsSet[1].selectedColor = color;
     }
   
    console.log(colorsSet);
    document.body.style.backgroundColor=color;
})
cp3.addEventListener("change",(e)=>{
    const color = e.target.value
    colorsSet.cp3 = color;
    if(colorsSet[2]){
        colorsSet[2].selectedColor = color;
     }
    console.log(colorsSet);
    document.body.style.backgroundColor=color;
})