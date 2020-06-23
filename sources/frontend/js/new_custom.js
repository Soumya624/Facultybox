
$('#blog_comment_button').click(function () {
    var blog_full_name = $("#blog_full_name").val();
    var blog_full_email = $("#blog_full_email").val();
    var blog_full_comment = $("#blog_full_comment").val();
    var blog_id_get = $("#blog_id_get").val();
    if (blog_full_name == '' || blog_full_email == '' || blog_full_comment == '') {
        alert('Please fill all fields');
    } else {
        var base_url = window.location.origin;
        $.ajax({
         type: "POST",
         url: "https://www.fpsjob.com/blog/post/comment/blog_comment",
         data: {
                    blog_id_get: blog_id_get,
                    blog_full_name: blog_full_name,
                    blog_full_email: blog_full_email,
                    blog_full_comment: blog_full_comment
                },
//         dataType: "text",  
         cache:false,
         success: 
              function(data){
                if(data=='1'){
                    $('#myModal').modal('show');
//                    alert('Thanks! You comment has been submitted successfully for approval.');
                    $("#blog_full_name").val('');
                    $("#blog_full_email").val('');
                    $("#blog_full_comment").val('');
                    
                }else{
                    alert('Sorry! Please try again later');
                } //as a debugging message.
              }
          });// you have missed this bracket
//     return false;
// });
}
//            $.ajax({
//                type: "POST",
//                url: <?php echo base_url(); ?> + "blog/blog_comment",
//                data: {//
//                    blog_full_name: blog_full_name
//                },
//                beforeSend: function () {//
//                    $("#keyword").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
//                },
//                success: function (data) {//
//                    $("#suggesstion-box").show();
//                    $("#suggesstion-box").html(data);
//                    $("#keyword").css("background", "#FFF");
//                }
//            });
//        alert('Congrats! your comment has been submitted successfully for approval');
//    }

});
