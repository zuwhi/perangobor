// $(document).ready(function(){
//     $(window).scroll(function(){
//         var wScroll = $(this).scrollTop;
//         console.log(wScroll)
//     })
// })
// function pudar(){
//     let openBg = document.querySelector('.openingBg');
//     let fade = document.createElement("style");
//     fade.innerHTML = `@keyframes fade {
//         0%{
//           opacity: 0;
//         }
//         100%{
//           opacity: 1;
//         }}
//         .openingBg{
//             animation: fade 5s;

//         }
//         `
//         ;
//         openBg.appendChild(fade);
//     location.href = 'main.html';
// }













// ==================HALAMAN MAIN PAGE=================
var audio = new Audio('/assets/sound/cut.mp3');

var autoScrollDelay = 1
var autoScrollSpeed = 2
var autoScrollTimer
function setAutoScroll(newValue) {
    autoScrollDelay = newValue ? newValue : autoScrollDelay //using autoScrollDelay instead of autoScrollSpeed
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer)
    }
    if (autoScrollDelay) {
        autoScrollTimer = setInterval(function(){
            window.scrollBy(0,autoScrollSpeed)
      },autoScrollDelay)
    }
}


audio.play();
var auto= 20;

var count= 0;

function putar(){
        if(count== 0){
            count=1
            $('#sound').css({'opacity' : '0'})
            audio.pause();
        }
            else{
                $('#sound').css({'opacity' : '1'})
                count = 0;
                audio.play();
            }
   
}

function autoScroll(){
    if(count== 0){
        count=1
        $('#scroll').css({'opacity' : '0'})
         auto= 20;
    }
        else{
            $('#scroll').css({'opacity' : '1'})
            count = 0;
             auto= aa;
            
        }
        setAutoScroll(auto)
    // setAutoScroll(auto)
}






setTimeout(function(){
    $('.banner .judul').addClass('munculJudul');
    $('.panah-scroll ').addClass('muncul');
    
    setTimeout(function(){
        $('.percik ').addClass('muncul');
        // setAutoScroll(auto)
    },4000)
},3000)

setTimeout(function(){
    $('.banner .judul ').addClass('float');
    setTimeout(function(){
    $('.judul-2').addClass('ada')},2000)
},3000)


function panah(){
    $('html').animate({scrollTop: 600}, 'slow');
    
}

var pakhaji = document.querySelector(".pakhaji");
var peternak = document.querySelector(".peternak");
var versus = document.querySelector(".banner img");
var judul2 = document.querySelector(".judul-2");
window.onscroll = function(){
    let value = window.scrollY;
    nilai = value > 100 ? 100 : (value < 0 ? 0 : value);
    scale= value/80*0.5;
    console.log(value)
  
  $('.judul-2').css({'position' : 'relative','transform': 'translateY('+nilai/6+'px)'})
  $('.api1').css({'transform': 'translateY('+value/8+'px)'})
  $('.api2').css({'transform': 'translateY('+value/10+'px) '})
  $('.api3').css({'transform': 'translateY(-'+value/16+'px)  translateX(-'+value/23+'px)'})
  $('.api4').css({'transform': 'translateY('+value/10+'px) translateX(-'+value/25+'px)'})
  $('.api6').css({'transform': 'translateY('+value/6+'px)'})


// $('.pakhaji').css({'transform': 'scale('+zoom+')'})
// $('.peternak').css({'transform': 'scale('+zoom+')'})
   if (value < 10){


    $('.panah-scroll ').addClass('muncul');
    $('.story .a').removeClass('muncul');
    $('.story .b').removeClass('muncul');
    $('.page2 .pic2').removeClass('muncul');
    $('.page2 .story-2').removeClass('muncul');
   } else if (value > 70){
        $('.page2').addClass('muncul');
        
    }
   if (value < 100){
    $('.bg-1').css({
        'background-color' : 'black',
        'transition': '2s'
    })
    $('.blok1').css({
        'background-color' : 'rgba(0, 0, 0, 0)',
        'transition': '5s'
    })
    $('.banner > img ').css({'position' : 'fixed','bottom' : 'initial'})
    $('.sidebar').removeClass('muncul')
    $('.pembuka .judul-3').removeClass('muncul');
    
   
}
    if (value > 300){
        $('.bg-1').css({
        'background-color' : 'rgb(49, 8, 8)'
    })
    $('.blok1').css({
        'background-color' : 'black',
        // 'background' : 'rgb(138,46,38)',
        // 'background' : 'linear-gradient(0deg, rgba(138,46,38,1) 0%, rgba(0,0,0,1) 34%)',
        // 'transition': '2s'
    })

    // #8a2e26
    $('.panah-scroll ').removeClass('muncul');
    
    $('.sidebar').addClass('muncul')

    $('.konten2 #peternak2').removeClass('muncul');
    }
   
   
    if (value > 598){
        $('.banner > img ').css({'position' : 'absolute','bottom' : '0px'})
        
        //page2
        $('.story .a').addClass('muncul');
        $('.story .b').addClass('muncul');
        
    
    }else{
        $('.page2').removeClass('muncul');
        
    }
    if(value > 500){
        $('.page2 .pic2').addClass('muncul');      
    }
    if (value > 1400){
       
       
    //    ternak = sapi > 50 ? 50 : (sapi < 0 ? 0 : sapi);
        // $('#ternak2').css({'transform': 'translateY('+ternak+'px)'})
        // $('#ternak4').css({'transform': 'translateX(-'+value/40+'px)'})
        // $('#ternak3').css({'transform': 'translateY('+value/40+'px)'})
        // $('#ternak10').css({'transform': 'translateX('+-ternak/2+'px)'})
        // $('#ternak5').css({'transform': 'translateX('+-ternak+'px) translateY('+value/60+'px)'})
        // $('#ternak7').css({'transform': 'translateY(-'+value/60+'px)'})
        // $('#ternak9').css({'transform': 'translateX('+ternak+'px)'})
        // $('#ternak6').css({'transform': 'translateY(-'+ternak/2+2+'px) translateX(-'+value/70+'px)'})
    }
    if(value > 1400){
        $('.page2 .story-2').addClass('muncul');
       
     
        
    }
    if(value > 1800){
        // $('.intro .text h2').css({'animation': 'fade 3s','opacity': '1'})
    }
  
    if (value > $('.konten').offset().top-500){
        
        cek= (value - 2000)/20;
        // console.log('hasil :'+cek);
        nilai = cek > 24 ? 24 : (cek < 0 ? 0 : cek);
        nilai2 = cek > 23 ? 23 : (cek < 0 ? 0 : cek);
        // console.log('nilai : '+nilai)
        $('#bagaimana').css({'transform': 'translateY('+nilai2*10+'px)'})
        $('#perang').css({'transform': 'translateX('+nilai*20+'px)'})
        $('#obor').css({'transform': 'translateX('+-nilai*20+'px)'})
        if(cek > 24){
            $('.intro .text h1').css({'color': 'white','text-shadow': '-1px 10px 0 hsl(0, 0%, 0%),1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'})
          
        }else{
            $('.intro .text h1').css({'color': '#8a2e26','text-shadow': '-1px 1px 0 hsl(0, 0%, 0%),1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000'})

        }
    }
    


    //////////////////////////////////// WADAHSAPIIIIIIII\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    ternak= (value-2000)/20*1.5;
    console.log('teranknya : '+ ternak)
    $('#ternak2').css({'transform': 'translateY('+ternak+'px)'})
    $('#ternak4').css({'transform': 'translateX(-'+value/40+'px)'})
    $('#ternak3').css({'transform': 'translateY('+value/40+'px)'})
    $('#ternak10').css({'transform': 'translateX('+-ternak+'px)'})
    $('#ternak5').css({'transform': 'translateX('+-ternak+'px) translateY('+value/60+'px)'})
    $('#ternak7').css({'transform': 'translateY(-'+value/60+'px)'})
    $('#ternak9').css({'transform': 'translateX('+ternak+'px)'})
    $('#ternak6').css({'transform': 'translateY(-'+value/70+'px) translateX(-'+value/70+'px)'})
    //////////////////////////////////// WADAHSAPIIIIIIII\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\






    if (value > $('.konten1').offset().top-300){
        $('.konten1').addClass('muncul');
        $('.konten1 .ternak').each(function(i)
        {
            setTimeout(function(){
                //ternak
                $('.konten1 .ternak').eq(i).addClass('muncul');
            },600 * i)
        });
        
        $('.intro').removeClass('muncul');
    }else if(value < $('.konten1').offset().top-300){
       
        $('.intro').addClass('muncul');
        $('.konten1').removeClass('muncul');
        $('.konten1 .ternak').removeClass('muncul');
    }


    if (value > $('.konten1').offset().top-200){
        $('.pembuka .judul-3').addClass('muncul');
        // $('.konten1 .ternak').each(function(i)
        // {
        //     setTimeout(function(){
        //         //ternak
        //         $('.konten1 .ternak').eq(i).addClass('muncul');
        //     },600 * i)
        // });
        $('.story .a').removeClass('muncul');
        $('.story .b').removeClass('muncul');
    }else if(value < $('.konten1').offset().top-200){
        $('.konten1').removeClass('muncul')
    }

    if (value > $('.konten2').offset().top-600){
        $('.konten1').removeClass('muncul');

    }
    if (value > $('.konten2').offset().top-400){
        $('.konten2 #peternak2').addClass('muncul');
    }

    if (value < $('.konten3').offset().top-300){
        $('.konten3').removeClass('muncul');
    }else if (value > $('.konten3').offset().top-300){
        $('.konten3').addClass('muncul');
        $('.konten2 #peternak2').removeClass('muncul');
    }

    if (value < $('.konten4').offset().top-300){
        $('.salam').removeClass('muncul');
        $('.a .teks').removeClass('muncul');
    }else if (value > $('.konten4').offset().top-300){
        $('.salam').addClass('muncul');
        $('.a .teks').addClass('muncul');
        $('.konten3').removeClass('muncul');
    }

    if (value < $('.konten5').offset().top-300){
        $('.mancing').removeClass('muncul');
        $('konten5 .teks').removeClass('muncul');
    }else if (value > $('.konten5').offset().top-300){
        $('.mancing').addClass('muncul');
        $('konten5 .teks').addClass('muncul');
        $('.salam').removeClass('muncul');
    }


    if (value > $('.konten6').offset().top-100){
        $('.konten6').removeClass('hilang');
        $('.konten6 .iwak').each(function(i)
        {
            setTimeout(function(){
                //konten6
                $('.konten6 .iwak').eq(i).addClass('muncul');
            },600 * i)
        });
       
    }else if(value < $('.konten6').offset().top-300){
        $('.konten6 .iwak').removeClass('muncul');
    }


    if (value < $('.konten7').offset().top-200){
        $('.latar').css({'background-color' : '#8a2e26'
        })
        $('.bakar').removeClass('muncul');
    }
    if (value > $('.konten7').offset().top-200){
        $('.latar').css({'background-color' : 'black'
        })
        $('.bakar').addClass('muncul');
        $('.konten6').addClass('hilang');
        
        
    }
batas = value > 100 ? 100 : (value < 0 ? 0 : value);
bakar= value-4500;
console.log('bakar :'+bakar/15)
$('.bakar2').css({'transform': 'translateY('+bakar/15+'px) scale(1.5)'})


    if (value < $('.konten8').offset().top-100){
        
        $('.konten8').removeClass('muncul');
    }
    if (value > $('.konten8').offset().top-100){
        $('.konten8').addClass('muncul');
        $('.bakar').removeClass('muncul');
        
     
        
    }


 

    // pakhaji.style = 'height : '+ value +'px,width :'+ value +'px';
    // pakhaji.style.left= nilai *  -0.5 + 'px';
    // peternak.style.left= nilai *  0.5 + 'px';

    // judul1.style.marginBottom = nilai *  -1.5 + 'px';

   
    // console.log(value);
    // if (value > $('.banner').offset().top-500){
    //     $('.banner > img ').css({'position' : 'absolute'})
        
    // }
    // if (value > $('.konten1').offset().top-200){
    //     console.log("ok");
    //     $('.konten1 .paraf1').addClass('muncul');
    //     // cek = document.querySelector('.konten1');
    //     // cek.innerHTML = '<h1> halooo </h1>';
    // }
    // else {
    //     $('.konten1 .paraf1').removeClass('muncul');

    // }
    


// if(value > 1100){
    //     $('.text ').css({'position' : 'static'})

    // }
    // if(value > 2500){
    //     $('.text ').css({'position' : 'fixed',})
    // }

}