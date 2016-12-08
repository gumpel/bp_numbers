var bp_numbObj = {
    bp_dot_1: {
        "bp_num_box_1": { title: "Web Development", num: 122, symbol: "%" },
        "bp_num_box_2": { title: "Graphic Design", num: 144, symbol: "h" },
        "bp_num_box_3": { title: "JavaSript", num: 34, symbol: "kmm" }
    },
    bp_dot_2: {
        "bp_num_box_1": { title: "PHP", num: 89, symbol: "%" },
        "bp_num_box_2": { title: "CSS", num: 19, symbol: "h" },
        "bp_num_box_3": { title: "HTML", num: 44, symbol: "km" }
    },
    bp_dot_3: {
        "bp_num_box_1": { title: "Gulp", num: 77, symbol: "%" },
        "bp_num_box_2": { title: "Bower", num: 37, symbol: "h" },
        "bp_num_box_3": { title: "Json", num: 44, symbol: "km" }
    },
    bp_dot_4: {
        "bp_num_box_1": { title: "Sass", num: 65, symbol: "%" },
        "bp_num_box_2": { title: "Node.js", num: 23, symbol: "h" },
        "bp_num_box_3": { title: "Angular", num: 78, symbol: "km" }
    },
    bp_dot_5: {
        "bp_num_box_1": { title: "Flux", num: 77, symbol: "%" },
        "bp_num_box_2": { title: "React", num: 67, symbol: "h" },
        "bp_num_box_3": { title: "Android", num: 44, symbol: "km" }
    }
}


$('.bp_dot').tooltip();
$('.bp_dot').on('click', function() {
    var objKey = $(this).attr('id');
    $(this).addClass('hvr-ripple-out');
    printBox(objKey);
});
$('.bp_dot').on('mouseleave', function() {
    $(this).removeClass('hvr-ripple-out');
});


function printBox(key) {
    $('#bp_num_box_1 .bp_num_title').html('');
    $('#bp_num_box_2 .bp_num_title').html('');
    $('#bp_num_box_3 .bp_num_title').html('');
    // Show text

    showText('#bp_num_box_1 .bp_num_title', bp_numbObj[key].bp_num_box_1.title, 0, 30);

    showText('#bp_num_box_2 .bp_num_title', bp_numbObj[key].bp_num_box_2.title, 0, 30);

    showText('#bp_num_box_3 .bp_num_title', bp_numbObj[key].bp_num_box_3.title, 0, 30);

    showNumber('#bp_num_box_1 .bp_num_percente', bp_numbObj[key].bp_num_box_1.num, bp_numbObj[key].bp_num_box_1.symbol, 0, 15);
    // $('#bp_num_box_1 .bp_num_percente').html(bp_numbObj[key].bp_num_box_1.num + bp_numbObj[key].bp_num_box_1.symbol);
    showNumber('#bp_num_box_2 .bp_num_percente', bp_numbObj[key].bp_num_box_2.num, bp_numbObj[key].bp_num_box_2.symbol, 0, 15);
    showNumber('#bp_num_box_3 .bp_num_percente', bp_numbObj[key].bp_num_box_3.num, bp_numbObj[key].bp_num_box_3.symbol, 0, 15);
    // $('#bp_num_box_2 .bp_num_percente').html(bp_numbObj[key].bp_num_box_2.num + bp_numbObj[key].bp_num_box_2.symbol);

    // $('#bp_num_box_3 .bp_num_percente').html(bp_numbObj[key].bp_num_box_3.num + bp_numbObj[key].bp_num_box_3.symbol);
}




var showText = function(target, message, index, interval) {

    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function() { showText(target, message, index, interval); }, interval);
    }
}

var showNumber = function(target, number, symbol, start, interval) {


    if (start < number) {        
        $(target).html(start + symbol);

        start++;
        setTimeout(function() { showNumber(target, number, symbol, start, interval); }, interval);
    }
}
