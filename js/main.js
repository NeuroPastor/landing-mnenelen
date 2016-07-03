      $(document).ready(function(){
        $(".filter input").on("change", function(){
          attr1 = $(this).val();
          
          $(".blogItem").fadeOut("fast");
            if(attr1 !== "all"){
              $(".filter input:checked").each(function(){
                attr = $(this).val();
                var x = tmp = 0;
                $(".blogItem").each(function(){

                  if($(this).hasClass(attr)){
                    tmp = x%2;
                    if(tmp !== 0){
                      $(this).addClass("col-md-offset-1");
                    } else {
                      $(this).removeClass("col-md-offset-1");
                    }                      
                    $(this).fadeIn("fast");
                    x++;
                  }
                });
              });
              $(".filter input#all").removeAttr("checked");
            } else {
                $(".blogItem").fadeIn("col-md-offset-1");
                $(".blogItem").filter("odd").fadeIn("col-xs-offset-1");
                $(".filter input").not(this).removeAttr("checked");
                $(".blogItem").fadeIn("fast");            
            }

          
        });

      });