var blockNum = 6;
var rgb = [];
var choices = []
var result = false

function generate(num){
    rgb = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
    $('.colorBlocks').css('display','block');
    choices = []
    for(var i = 0; i < blockNum; i++){
        choices.push(Array.from({ length: 3 }, () => Math.floor(Math.random() * 256)));
    };
    choices[Math.floor(Math.random()*num)] = rgb;
    $('.rgbValue').text('(' + rgb.toString() + ')');
    $('.colorBlocks').each(function(i){
        $(this).css('background',`rgb(${choices[i]})`)
    })
    result = false;
    $('.resultText').html('');
    $('.colorBlocks').removeClass('correct');

    $('#heading').css('background','linear-gradient(rgb(234, 110, 238),rgb(79, 105, 224))')
}

$(document).ready(function () {
    generate(blockNum);
});

$('.hard').on('click',function(){
    $('#hardBlock').slideDown(1000);
    blockNum = 6;
    generate(blockNum);
});

$('.easy').on('click', function () {
    $('#hardBlock').slideUp(1000);
    blockNum = 3;
    generate(blockNum);
});

$('.newColors').on('click', function(){
    generate(blockNum);
});

$('.colorBlocks').on('click',function(){
    // console.log($(this).css('background-color'));
    // console.log("rgb(" + rgb.toString() + ')');
    var chosen = $(this).css('background-color');
    chosen = chosen.slice(4, chosen.length - 1);
    chosen = chosen.split(',').map(x=>parseInt(x));
    if(!result){
        if (chosen.toString() === rgb.toString()) {
            $('.resultText').html('<h4 class= "text-center font-italic text-success">Correct!</h4>');
            result = true;
            // $('.colorBlocks').css({
            //     'background': `rgb(${rgb})`,
            //     'display':'block'
            // } );
            $('#heading').css('background',`rgb(${rgb})`);
            // $("#heading").animate({
            //     background: `rgb(${rgb})`,
            // }, 1000);
            $(".colorBlocks").animate({
                backgroundColor: `rgb(${rgb})`,
                // 'display': 'block'
            },1000);
        }
        else {
            $(this).css('background','#6c757d');
            $('.resultText').html('<h4 class= "text-center font-italic text-danger">Try Again.</h4>');
        }
    }
})

