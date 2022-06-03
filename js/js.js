var test = document.querySelector(':root');




function bag(){ // черный 
    // просто главный фон
    

    test.style.setProperty('--f1con', '#000000');
    // дальше контент
    test.style.setProperty('--f1', '#15111F');
    //тект фоон 
    test.style.setProperty('--f2', '#ffffff');
    test.style.setProperty('--f2con-fix-text', '#000000');
   
}



function bag1(){ // белый
     // просто главный фон 
     test.style.setProperty('--f1', '#ffffff');

     // дальше контент
     test.style.setProperty('--f1con', '#F0EDF3');
     test.style.setProperty('--f2', '#000000');
     test.style.setProperty('--f2con-fix-text', '#ffffff');
}


function bag2(){ // странный

          // просто главный фон 
          test.style.setProperty('--f1', '#15111F');

          // дальше контент
          test.style.setProperty('--f1con', '#1E1932');

          test.style.setProperty('--f2', '#ffffff');
          test.style.setProperty('--f2con-fix-text', '#000000');

}



// функции для изменения цветов на кнопках итд текстах


function bgbuttontext1(){
    test.style.setProperty('--f1-button', '#4F38A6');

    
}

function bgbuttontext2(){
    test.style.setProperty('--f1-button', '#E6D153');

    
}

function bgbuttontext3(){
    test.style.setProperty('--f1-button', '#E34B5E');

    
}

function bgbuttontext4(){
    test.style.setProperty('--f1-button', '#4BE59F');

    
}

function bgbuttontext5(){
    test.style.setProperty('--f1-button', '#4AABDF');

    
}


// изменить размер контента
function bgbuttontexts1() {
    test.style.setProperty('--glavn02', '600px');
}





