

        var turn=true;  //true= X turn
        var squares = [];
      
        
function reset(a,b,c)
{
    document.getElementById('a' +a).style.color="#7a1111";
    document.getElementById('a' +b).style.color="#7a1111";
    document.getElementById('a' +c).style.color="#7a1111";
    
    
    setTimeout(function(){
        
        location.reload();
    }
        ,1000);
}
  
        function checkWiner()
        {
            for(var i=1; i<=9; i++){
                squares[i] = document.getElementById('a' + i).innerHTML;
            }
        
            
            //شروط
            
            
            if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!="")
            {
               alert('player ' + squares[1] + ' Wins the game !!!');
                reset(1,2,3);
            }
            
             
            if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!="")
            {
               alert('player ' + squares[4] + ' Wins the game !!!');
                 reset(4,5,6);
            }
            
             
            if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!="")
            {
               alert('player ' + squares[7] + ' Wins the game !!!');
                 reset(7,8,9);
            }
     
            
            //شروط2  
            
            
            if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!="")
            {
               alert('player ' + squares[1] + ' Wins the game !!!');
                 reset(1,4,7);
            }
            
             
            if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!="")
            {
               alert('player ' + squares[2] + ' Wins the game !!!');
                 reset(2,5,8);
            }
            
             
            if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!="")
            {
               alert('player ' + squares[3] + ' Wins the game !!!');
                 reset(3,6,9);
            }
               //شروط3  
             if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!="")
            {
               alert('player ' + squares[1] + ' Wins the game !!!');
                 reset(1,5,9);
            }
            
             
            if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!="")
            {
               alert('player ' + squares[3] + ' Wins the game !!!');
                 reset(3,5,7);
            }
            
            
        }

        
        
        
    function insert(id)
        {
            var S=document.getElementById(id);
          if(turn && S.innerHTML==""){
              S.innerHTML="X";
              turn= !turn;
    
          }
            
            else if(!turn && S.innerHTML==""){
                S.innerHTML="O"; 
                turn= !turn;
            }
            
            checkWiner();
        }
        
        
      
        