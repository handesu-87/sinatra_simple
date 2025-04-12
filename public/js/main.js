// window.onload=function() {
//     alert('hello, world');
// };

$(function () {
    $('.add-star').click(function () {
        var $this = $(this);
        var post_id = $this.attr('data-post-id');
        // console.log(post_id);
        $.ajax({
            url: '/star?post_id=' + post_id,
            dataType: 'json',
            success: function (data) {
                // alert('スターをつけました！');
                // console.log(data['star_count']);
                $this.text(data['star_count']);
            },
            error: function (data) {
                alert('失敗しました。');
            }
        });
    });

});
