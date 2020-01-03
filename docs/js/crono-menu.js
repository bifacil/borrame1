        function expand(){
          if(document.querySelector('.expand')==null){
                document.querySelector('#u-app-wrapper').classList.add('expand');
                document.querySelector('#u-app-wrapper').classList.add('panel-sm');

                document.querySelector('.preCardCols').classList.add('card-columns');

                let cards=document.querySelectorAll('.preCard');
                for(let i=0;i<cards.length;i++){
                  cards[i].classList.add('card');
                }

                let as = document.querySelectorAll('.left-menu-parent>a');
                for(let i=0;i<as.length;i++){
                  as[i].setAttribute("style", "pointer-events:none;");
                }

                /*Expandimos si no lo estan*/
                let listas=document.querySelectorAll('.left-menu-sub');
                for(let i=0;i<listas.length;i++){
                  listas[i].setAttribute("style", "display:block;");
                }

         
          }else{
            document.querySelector('#u-app-wrapper').classList.remove('expand');
            document.querySelector('.preCardCols').classList.remove('card-columns');
            let cards=document.querySelectorAll('.preCard');
                for(let i=0;i<cards.length;i++){
                  cards[i].classList.remove('card');
                }

            let as = document.querySelectorAll('.left-menu-parent>a');
                for(let i=0;i<as.length;i++){
                  as[i].removeAttribute("style", "pointer-events:none;");
                }
          }
          
        }
