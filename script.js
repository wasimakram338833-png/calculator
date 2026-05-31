let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenVale = '';
for(item of buttons){
    item.addEventlistener('click', (e)=>{
        buttontext = e.target.innertext;
        console.log('Button textis, buttontext')
        if(buttontext=='x'){
            buttontext = '*';
            screenVale += buttonetext;
            screen.vale = screenVale;
        }
             else if (buttonetext =='C'){
                screenVale = "";
                screen.value = screenVale;
         }   
        
        else if (buttonetext =='='){
             screen.value = eval(screenVale);

        }
        else{
            screenVale += buttonetext;
            screen.vale =screenVale;
        }
    })
}