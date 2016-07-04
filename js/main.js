      $(document).ready(function(){
        $(".filter input").on("change", function(){
          var cats = [];//Массив категорий
          var item = [];
          var j = 0;
          var i = 0;
          var x = 0;

          var blogItem = $(".blogPosts").height();
          $(".blogPosts").css("min-height", $(".blogItem").height()*2);

          $(".blogItem").removeClass("col-md-offset-1").hide();


          if($(this).is("#all")){
            $(".filter input").not("#all").removeAttr("checked");//Если показать все, то чекед снимаем с других чекбоксов
            $(".blogItem").fadeIn("fast", function(){
                $(".blogItem").filter(":odd").addClass("col-md-offset-1");
            });
          } else {
            $(".filter input#all").removeAttr("checked")//Если НЕ показать всё, то снимаем с нее чекед
          }
          $(".filter input").each(function(){//Заполняем массив категорий
              var val = $(this).val();
              var index = $(this).index();
              
              index=index/2;
              if( $(this).is(":checked") ){
                cats[index] = val;
                
              }
              cats.sort();
          });
          
          $(".blogItem").each(function(){
            for(i=0;i<cats.length;i++){
              if( $(this).hasClass(cats[i]) ){
                  if(!$(this).is(":visible")){
                      $(this).fadeIn("fast");
                      j++;
                        if(j % 2 == 0 && !$(this).hasClass("col-md-offset-1")){
                          $(this).addClass("col-md-offset-1");
                        }
                     console.log($(this).index());
                  }
              }
            }
            
          });
          if($(".filter input:checked").length<=0){
             $(".filter input#all").attr("checked","true");
             $(".blogItem").fadeIn("fast", function(){
                $(".blogItem").filter(":odd").addClass("col-md-offset-1");
            });
          }
        });
      });