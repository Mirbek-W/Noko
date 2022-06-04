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
    test.style.setProperty('--f1-button', '#4AABDF')  }
// изменить размер контента
function bgbuttontexts1() {
    // glavnui pont 01
   test.style.setProperty('--glavn02', '400px');
   test.style.setProperty('--fixed-left-1', '230px');
   test.style.setProperty('--fix2-rigint-wi', '340px');
   test.style.setProperty('--fix2-rigint-lef', '830px') }
function bgbuttontexts2() {
    // glavnui pont 01
   test.style.setProperty('--glavn02', '450px');
   test.style.setProperty('--fixed-left-1', '240px');
   test.style.setProperty('--fix2-rigint-wi', '360px');
   test.style.setProperty('--fix2-rigint-lef', '870px')
   
}
function bgbuttontexts3() {
     // glavnui pont 01
    test.style.setProperty('--glavn02', '500px');
    test.style.setProperty('--fixed-left-1', '290px');
    test.style.setProperty('--fixed-left-1-position', '100px');
    test.style.setProperty('--fix2-rigint-wi', '380px');
    test.style.setProperty('--fix2-rigint-lef', '910px') 
}
function bgbuttontexts4() {
    // glavnui pont 01
    test.style.setProperty('--glavn02', '550px');
    test.style.setProperty('--fixed-left-1', '330px');
    test.style.setProperty('--fixed-left-1-position', '60px');
    test.style.setProperty('--fix2-rigint-wi', '400px');
    test.style.setProperty('--fix2-rigint-lef', '950px');
}
function bgbuttontexts5() {
    // glavnui pont 01
    test.style.setProperty('--glavn02', '600px');
    test.style.setProperty('--fixed-left-1', '370px');
    test.style.setProperty('--fixed-left-1-position', '13px');
    test.style.setProperty('--fix2-rigint-wi', '360px');
    test.style.setProperty('--fix2-rigint-lef', '1003px');

}




function boxshadow(gof){
    test.style.setProperty('--box-shadow', '0px 34px 12px 7px');
    function gof01(){
        test.style.setProperty('--box-shadow', '0px  0px 0px 0px');
    }

    setTimeout(gof01,2000)
        
    

}


