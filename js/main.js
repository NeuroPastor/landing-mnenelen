      $(document).ready(function(){
        $(".filter input").on("change", function(){
          // $(".blogItem").removeClass("col-md-offset-1");
          // attr1 = $(this).val();
          // var elem = [];
          // $(".blogItem").hide("fast");
          //   if(attr1 !== "all"){
          //     $(".filter input:checked").each(function(){
          //       attr = $(this).val();
          //     //  alert(attr);
          //       var x = 0;
               
          //       $(".blogItem").each(function(){
          //         if($(this).hasClass(attr)){
                    
          //           var index = $(this).index();
          //           elem.push(index);
          //           elem.sort();

                    
          //           x++;
          //           $(this).fadeIn(800, addClassBootstrap(elem,x));

          //         }
          //       });
          //     });
          //     $(".filter input#all").removeAttr("checked");
          //   } else {
          //       $(".blogItem").filter("odd").addClass("col-md-offset-1");
          //       $(".filter input").not(this).removeAttr("checked");
          //       $(".blogItem").fadeIn("fast", addClassBootstrap());            
          //   }
          //    //alert($(".blogItem").());
          //   function addClassBootstrap(elem,x){
          //           Unique(elem);
          //           console.log(elem);
          //           //$(".filter>div").text("");
          //           var i=0;
          //         for(i=0; i<elem.length; i++){
          //             var count;
          //            // $(".filter").append("<div>"+elem[i]+"</div>");

          //             count = elem[i+1];

          //             //alert(x);
          //             if(i % 2 == 0){
          //               $(".blogItem:eq("+count+")").addClass("col-md-offset-1");
          //             }
          //         } 
          //          // $(".filter").append("<hr>");
                  
          //   }
            
          //   function Unique(A)
          //   {
          //       var n = A.length, k = 0, B = [];
          //       for (var i = 0; i < n; i++) 
          //        { var j = 0;
          //          while (j < k && B[j] !== A[i]) j++;
          //          if (j == k) B[k++] = A[i];
          //        }
          //       return B;
          //   }
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
          //cats.sort();
          //console.log(cats);
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
          
        //alert($(".blogItem:visible").length);
          //console.log(item);
          
        });

            

//        $(".blogItem:visible").addClass("col-md-offset-1");
      });