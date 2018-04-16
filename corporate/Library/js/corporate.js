$(function () {
    // ファーストビュー切り替え
    $('.Trigger').hover(
        function (e) {
            $('#Corporate').stop(true,true);
            var width = $(window).width();
            if (width < 767) { return;}
            var ElementId = $(this).attr("id");
            $('#Corporate').fadeOut(300);
            switch (ElementId) {
                case "mieruka":
                    $('#MierukaEngine').stop(true, true);
                    $('#MierukaEngine').fadeIn(300);
                    break;
                case "cr":
                    $('#CustomerRings').stop(true, true);
                    $('#CustomerRings').fadeIn(300);
                    break;
                case "as":
                    $('#AlphaScope').stop(true, true);
                    $('#AlphaScope').fadeIn(300);
                    break;
                case "talent":
                    $('#TalentPalette').stop(true, true);
                    $('#TalentPalette').fadeIn(300);
                    break;
            }
        },
        function (e) {
            $('#Corporate').stop(true, true);
            var width = $(window).width();
            if (width < 767) { return; }
            var ElementId = $(this).attr("id");
            switch (ElementId) {
                case "mieruka":
                    $('#MierukaEngine').stop(true, true);
                    $('#MierukaEngine').fadeOut(300);
                    break;
                case "cr":
                    $('#CustomerRings').stop(true, true);
                    $('#CustomerRings').fadeOut(300);
                    break;
                case "as":
                    $('#AlphaScope').stop(true, true);
                    $('#AlphaScope').fadeOut(300);
                    break;
                case "talent":
                    $('#TalentPalette').stop(true, true);
                    $('#TalentPalette').fadeOut(300);
                    break;
            }
            $('#Corporate').fadeIn(300);
            $('#Corporate').css('display', '');
        }
    );
});
