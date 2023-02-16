let btn = document.querySelector('.display_content_2_center_down_ridht_bottom');
let inputText = document.querySelector('#text');
console.log(inputText.value);
btn.addEventListener('click', function(){
    let main = document.querySelector('.display_content_2_post_main');
    
    let block = document.createElement('div');
    block.className = 'display_content_2_post';
    block.id ='';
    // block.innerHTML = btn.value;
    block.innerHTML = '<div class="display_content_2_post"><div class="display_content_2_post_up"><div class="display_content_2_post_up_left"><div class="display_content_2_post_up_left_img"><img src="img/Group 39.png" alt=""></div><div class="display_content_2_post_up_left_txt"><div class="display_content_2_post_up_left_txt_up">momosanasimp@tuskuk</div><div class="display_content_2_post_up_left_txt_down">' + inputText.value + '</div></div></div><div class="display_content_2_post_up_ridht"><img src="img/Group 8 (1).png" alt=""></div></div><div class="display_content_2_post_down"><div class="display_content_2_post_down_icon"><div class="display_content_2_post_down_icon_1"><img src="img/Group 22.png" alt=""></div><div class="display_content_2_post_down_icon_1"><img src="img/Group 21.png" alt=""></div><div class="display_content_2_post_down_icon_1"><img src="img/Vector (7).png" alt=""></div><div class="display_content_2_post_down_icon_1"><img src="img/Group 23.png" alt=""></div><div class="display_content_2_post_down_icon_1"><img src="img/Vector (8).png" alt=""></div></div></div></div>';
    main.append(block);

})