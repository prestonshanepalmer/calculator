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

            resultHolder = resultHolder.toString();

            var arrayAdditionHolder = resultHolder.split('+');
            console.log(arrayAdditionHolder);
            if (resultHolder.indexOf('+') != -1 && arrayAdditionHolder.length >= 2) {

                for (var i = 0, finalNum = 0; i < arrayAdditionHolder.length; i++) {
                    if (arrayAdditionHolder[i] != "") {
                        finalNum += parseFloat(arrayAdditionHolder[i]);
                    } else {
                        console.log("empty string alert!");
                    }
                }

                resultHolder = finalNum;
                $('#ResultPane').val(resultHolder);
                resultNum = true;

            } else {
                console.log("none of thee above");
            }

        } else {
            console.log("resultHolder is empty!");
        }
    });


    //Keypress actions
    $('#ResultPane').on("keypress", function (event) {

        var resultHolderLength;
        resultHolder = $('#ResultPane').val();
        
        //enter key
        if (event.which == 13) {
            
            if (resultHolder != "") {

                console.log(resultHolder);
                resultHolder = resultHolder.toString();

                var arrayAdditionHolder = resultHolder.split('+');
                console.log(arrayAdditionHolder);
                if (resultHolder.indexOf('+') != -1 && arrayAdditionHolder.length >= 2) {

                    for (var i = 0, finalNum = 0; i < arrayAdditionHolder.length; i++) {
                        if (arrayAdditionHolder[i] != "") {
                            finalNum += parseFloat(arrayAdditionHolder[i]);
                        } else {
                            console.log("empty string alert!");
                        }
                    }

                    resultHolder = finalNum;
                    console.log(resultHolder);
                    $('#ResultPane').val(resultHolder);
                    resultNum = true;

                } else {
                    console.log("none of thee above");
                }

            } else {
                console.log("resultHolder is empty!");
            }


           //backspace key
        } else if (event.which == 8) {
            if (resultHolder != "") {
                resultHolder = resultHolder.toString();
                var resultHolderLength = resultHolder.length;
                resultHolder = resultHolder.substring(resultHolderLength - 1, 0);
                resultNum = false;
            } else {
                console.log("resultHolder is empty!");
            }
        } else {
            //add key or if the final result hasn't been reached yet
            if (event.which == 107 || !resultNum) {
                //console.log(event);
                //resultHolder = $('#ResultPane').val();
                console.log(resultHolder);

                valueHolder = event.key;
                resultHolder += valueHolder;
                resultNum = false;
                console.log(resultHolder);
                console.log("enter key pressed or result hasn't been reached");
            } else {
                valueHolder = event.key;
                resultHolder = ("" + valueHolder);
                resultNum = false;
            }
        } 

    });

});

