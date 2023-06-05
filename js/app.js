function bot(){
    let inp_value = document.getElementById('group').value;
    if(inp_value.slice(-3,-2)==1){
        document.body.style.backgroundColor = 'pink'
        document.getElementById('grnm').innerHTML = 'Morning Group'
        document.getElementById('grnm').style.color = 'red'
    } else if(inp_value.slice(-3,-2)==2){
        document.body.style.backgroundColor = 'red'
        document.getElementById('grnm').innerHTML = 'Afternoon Group'
        document.getElementById('grnm').style.color = 'yellow'
    } else if(inp_value.slice(-3,-2)==3){
        document.body.style.backgroundColor = 'blue'
        document.getElementById('grnm').innerHTML = 'Evening Group'
        document.getElementById('grnm').style.color = 'black'
    }
}


function snmn(){
    if(document.body.style.backgroundColor == 'bisque'){
        document.body.style.backgroundColor = 'gray'
        
    }
    else {
        document.body.style.backgroundColor = 'bisque'
    }
}