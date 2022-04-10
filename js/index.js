    // $(document).ready(function() {
    //
    //   $(".fancy_title").lettering();
    //   let span = $("span");
    //   $("span").each(function(index) {
    //     let delay = ((index + 1) *"0.05")+"s";
    //     $(this).css({'animationDelay' : delay});
    //   });
    //
    //   // for (let i = 1; i < span.length; i++) {
    //   //   let delay = ((i + 1) *"0.05")+"s";
    //   //   span[i].setAttribute("style", "animation-delay:" + delay);
    //   // }
    // });




    $('button').on('click', function(){
    	var number = getRandomInt(1, 40);
    	if (number < 10) {number = '0'+ number;}
    	$(this).html('<div class="loader-' + number + '"></div> Loading...');
    	console.log('Resize window to change size and color of the button');
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $(window).resize(function() {
    	$('button').css('color', 'hsl(' + Math.floor((window.innerWidth / 360)*100)  + ', 70%, 70%)');
    });



    $("#nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });



    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
    		cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
    		nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }

      wordArray.push(letters);
    }
    setTimeout(changeWord, 4000);

    setInterval(changeWord, 8000);

    $('.js-form-validate').submit(function () {
    let form = $(this);
    let field = [];
    form.find('input[data-validate]').each(function () {
      field.push('input[data-validate]');
      let value = $(this).val(),
          line = $(this).closest('.some-form__line');
      for(let i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('some-form__line-required');
          $(this).css( "border-color", "#ff0000" );
          $(this).closest('.some-form__line').children('label').css( "color", "#ff0000" );
          setTimeout(function() {
            line.removeClass('some-form__line-required');
            $(this).css( "border-color", "#ffffff66" );
            $(this).closest('.some-form__line').children('label').css( "color", "#ffffff80" );
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
  });

  $(document).ready(function() {
  $('a.LinkModal').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(297,	function(){
      $('#modal')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('#modal__close, #overlay').click( function(){
    $('#modal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#overlay').fadeOut(297);
    });
  });
});
