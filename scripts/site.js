// JavaScript Document


//on document ready
$(function () {

    //reset value of Result Pane
    $('#ResultPane').val("");

    var valueHolder;
    var resultHolder = $('#ResultPane').val();

    //Results given = one number shown directly after computation
    var resultNum = false;


    //Button clicking actions
    $('button').not('button#Equals, button#Clear, button#Backspace').on("click", function () {
        if (!resultNum || $(this).is('button#Add')) {
            valueHolder = $(this).text();
            resultHolder += valueHolder;
            $('#ResultPane').val(resultHolder);
            resultNum = false;
        } else {
            valueHolder = $(this).text();
            resultHolder = ("" + valueHolder);
            $('#ResultPane').val(resultHolder);
            resultNum = false;
        }
    });

    $('button#Clear').on("click", function () {
        resultHolder = "";
        $('#ResultPane').val(resultHolder);
        resultNum = false;
    });

    $('button#Backspace').on("click", function () {
        if (resultHolder != "") {
            resultHolder = resultHolder.toString();
            var resultHolderLength = resultHolder.length;
            resultHolder = resultHolder.substring(resultHolderLength - 1, 0);

            $('#ResultPane').val(resultHolder);
            resultNum = false;
        } else {
            console.log("resultHolder is empty!");
        }
    });

    $('button#Equals').on("click", function () {
        console.log($('#ResultPane').val());
        if (resultHolder != "") {
            var add1 = resultHolder.indexOf('+');
            var num1 = parseInt(resultHolder.substr(0, (add1)));
            var num2 = parseInt(resultHolder.substr((add1 + 1)));
            var finalNum = num1 + num2;

            resultHolder = finalNum;
            $('#ResultPane').val(resultHolder);
            resultNum = true;

        } else {
            console.log("resultHolder is empty!");
        }
    });


    //Keypress actions
    $('#ResultPane').on("keypress", function (event) {

        var resultHolderLength;

        if (event.which == 13) {
            if (resultHolder != "") {
                var add1 = resultHolder.indexOf('+');
                var num1 = parseInt(resultHolder.substr(0, (add1)));
                var num2 = parseInt(resultHolder.substr((add1 + 1)));
                var finalNum = num1 + num2;

                resultHolder = finalNum;
                $('#ResultPane').val(resultHolder);
                resultNum = true;
            } else {
                console.log("resultHolder is empty!");
            }

        } else if (event.which == 8) {
            if (resultHolder != "") {
                console.log("backspace key hit");
                console.log(resultHolder);
                resultHolder = resultHolder.toString();
                resultHolderLength = resultHolder.length;
                console.log(resultHolderLength);
                resultHolder = resultHolder.substring(resultHolderLength - 1, 0);
                //$('#ResultPane').val(resultHolder);
                console.log(resultHolder);
                resultNum = false;
            }
        } else {
            if (event.which == 107 || !resultNum) {
                console.log(event);
                valueHolder = event.key;
                resultHolder += valueHolder;
                //$('#ResultPane').val(resultHolder);
                resultNum = false;
            } else {
                valueHolder = event.key;
                resultHolder = ("" + valueHolder);
                resultNum = false;
            }
        } 


    });

});

$(window).load(function() 
{

});

