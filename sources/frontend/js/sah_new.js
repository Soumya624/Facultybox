//$('input[type=text]').on('blur', function() {
//        if ($("#personalForm").valid()) {
//            $('#personal_verify').prop('disabled', false);  
//        } else {
//            $('#personal_verify').prop('disabled', 'disabled');
//        }
//        
//    });

function _(el) {
  return document.getElementById(el);
}

function uploadFile() {
  var file = _("upload").files[0];
  // alert(file.name+" | "+file.size+" | "+file.type);
  var formdata = new FormData();
  formdata.append("upload", file);
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false);
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);
  ajax.open("POST", "file_upload_parser.php"); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
  //use file_upload_parser.php from above url
  ajax.send(formdata);
}

function progressHandler(event) {
 
  var percent = (event.loaded / event.total) * 100;
   _("loaded_n_total").innerHTML = "Uploaded " + Math.round(percent) + " % ";
  _("progressBar").value = Math.round(percent);
  _("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
}

function completeHandler(event) {
  _("status").innerHTML = event.target.responseText;
  _("progressBar").value = 100; //wil clear progress bar after successful upload
}

function errorHandler(event) {
  _("status").innerHTML = "Upload Failed";
}

function abortHandler(event) {
  _("status").innerHTML = "Upload Aborted";
}

$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myJobLi label").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
$("#upDateProfileCheck").click(function(){
   $("#loader_check_up").show(); 
   $("#loader_check_up").show(); 
   $(".selUplo").attr('disabled');
   $(".resUplo").attr('disabled');
});
$("#fadeCheck").hide();
    $("#fadeCheck").fadeIn(4000);
    $('#pause_Video').click(function() {
        $("#videoRe").get(0).pause();
    });
    
    $.validator.addMethod("languageTest", function(value) {
        //regEx = '/[?-?]+|[?-?]+|[?-??]+|[a-zA-Z0-9]+|[?-??-??-?]+[???]+/u';
        regEx = /[a-zA-Z0-9]+|[?-??-??-?]+/;
        if(!regEx.test(value))
            return false;
        else if(regEx.test(value))
            return true;
    }, 'Please enter only english');
    
    $("#personalForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                languageTest : true
            },
            personal_lname: {
                required: true,
                minlength: 4,
                languageTest : true
            },
            email: {
                required: true,
                email: true
            },
            mobile:{
                required:true,
                minlength:10,
                maxlength:10,
                number: true
            },
            
        },
        messages: {
            name : {
                languageTest : 'Please enter only english language'
            },
            personal_lname : {
                languageTest : 'Please enter only english language'
            }
        }
    });

//$("#personal_mobile").keyup(function () {
//
//
//    var personal_mobile = $(this).val();
//    var filter = /^\d*(?:\.\d{1,2})?$/;
//
//    if (filter.test(personal_mobile)) {
//        if (personal_mobile.length == 10) {
//            $("#pmob_errmsgbox").addClass("text-success");
//            $("#pmob_errmsgbox").removeClass("text-danger");
//            $("#pmob_errmsgbox").text('Valid mobile number');
//            $("#personal_verify").removeAttr('disabled');
//        } else {
//            $("#pmob_errmsgbox").addClass("text-danger");
//            $("#pmob_errmsgbox").removeClass("text-success");
//            $("#pmob_errmsgbox").text('Please put 10  digit mobile number');
//            $("#personal_verify").attr('disabled', 'disabled');
//            return false;
//        }
//    } else {
////              alert('Not a valid number');
//        $("#pmob_errmsgbox").addClass("text-danger");
//        $("#pmob_errmsgbox").removeClass("text-success");
//        $("#pmob_errmsgbox").text('Not a valid number');
//        $("#personal_verify").attr('disabled', 'disabled');
//        return false;
//    }
//});
$("#personal_fname").keyup(function () {

    var personal_fname = $(this).val();
//       console.log(personal_fname);
    $("#p_fname").val(personal_fname);
});

$("#personal_lname").keyup(function () {

    var personal_lname = $(this).val();
//       console.log(personal_fname);
    $("#p_lastname").val(personal_lname);
});

$("#personal_email").keyup(function () {

    var personal_email = $(this).val();
//       console.log(personal_fname);
    $("#p_email").val(personal_email);
});

$("#personal_mobile").keyup(function () {

    var personal_mobile = $(this).val();
//       console.log(personal_fname);
    $("#p_mobile").val(personal_mobile);
});

$("#personal_mobile").keyup(function () {

    var personal_mobile = $(this).val();
//       console.log(personal_fname);
    $("#p_mobile").val(personal_mobile);
});

$("#personal_mobile").keyup(function () {

    var personal_mobile = $(this).val();
//       console.log(personal_fname);
    $("#p_mobile").val(personal_mobile);
});
$('.personal_state').change(function () {
    var personal_state = $(this).val();
    $("#p_state").val(personal_state);
//    alert(personal_state);
});
$('.personal_city').change(function () {
    var personal_city = $(this).val();
    $("#p_city").val(personal_city);
//    alert(personal_state);
});
$(document).on('click', '#personal_verify', function () {

//    var personal_state = $(".personal_state option:selected").val();
//    alert(personal_state);
//    $("#p_state").val(personal_state);
//
//    var personal_city = $(".personal_city option:selected").val();
//    $("#p_city").val(personal_city);
});

// $("#personal_email").keyup(function(){
//     var email = $(this).val();
//    // here you can validate email and show alert or show message into your error box.
//        var pattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//        if(pattern.test(email)){
//            $("#pemail_errmsgbox").html("Valid email address");
//        }else{
//            $("#pemail_errmsgbox").html("Please enter valid email address");
//        }
//   });   

$(document).on('click', '#loadMore3214', function (e) {
    if ($(".moreBox:hidden").length == 0) {
        //hideLoad
        $("#hideLoad").fadeOut('slow');
        //alert($(".moreBox:hidden").length);
    } else {
        // alert('ger');
        if ($(".moreBox:visible")) {
            $(".product-yarn:nth-child(5n)").after("<div id='addGoogleAd' class='col-lg-12 col-md-12 col-sm-12 col-12' style=''><script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><ins class='adsbygoogle' style='display:block' data-ad-format='fluid' data-ad-layout-key='-fb+5w+4e-db+86' data-ad-client='ca-pub-1851320283579041' data-ad-slot='3077087654'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>");
        }
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 10).slideDown();
    }



});