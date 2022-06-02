var test = document.querySelector(':root');




function bag(){ // черный 
    // просто главный фон
    

    test.style.setProperty('--f1con', '#000000');
    // дальше контент
    test.style.setProperty('--f1', '#15111F');
   
}



function bag1(){ // белый
     // просто главный фон 
     test.style.setProperty('--f1', '#ffffff');

     // дальше контент
     test.style.setProperty('--f1con', '#F0EDF3');
}


function bag2(){ // странный

          // просто главный фон 
          test.style.setProperty('--f1', '#15111F');

          // дальше контент
          test.style.setProperty('--f1con', '#1E1932');

}



