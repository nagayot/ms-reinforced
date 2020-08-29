$(function() {
  $('.sf-box').change(function(){                                    // ☆15までの攻撃or魔力の計算
    var sf_ama_under15 = $('#sf-ama-under15').val();                 // 入力された数値
    var sf_ama_kaisu_under15 = $('#sf-ama-kaisu-under15').val();     // ドロップボックスで選択された回数

    for (var i = 1; i <= sf_ama_kaisu_under15; i++) {
      if(sf_ama_under15 >= 50 && sf_ama_under15 <= 99 ){
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(2);

      }else if (sf_ama_under15 >= 100 && sf_ama_under15 <= 149) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(3);

      }else if (sf_ama_under15 >= 150 && sf_ama_under15 <= 199) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(4);

      }else if (sf_ama_under15 >= 200 && sf_ama_under15 <= 249) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(5);

      }else if (sf_ama_under15 >= 250 && sf_ama_under15<= 299) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(6);

      }else if (sf_ama_under15 >= 300 && sf_ama_under15 <= 349) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(7);

      }else if (sf_ama_under15 >= 350 && sf_ama_under15 <= 399) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(8);

      }else if (sf_ama_under15 >= 400 && sf_ama_under15 <= 449) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(9);

      }else if (sf_ama_under15 >= 450 && sf_ama_under15 <= 499) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(10);

      }else if (sf_ama_under15 >= 500 && sf_ama_under15 <= 549) {
        sf_ama_under15 = parseInt(sf_ama_under15) + parseInt(11);
      }
    };
    $('#sf-ama-result-under15').val(sf_ama_under15);
  });



  $('.sf-box').change(function(){                                       // ☆15までのメインステータスの計算
    var sf_status_under15 = $('#sf-status-under15').val();              // 入力された数値
    var sf_status_kaisu_under15 = $('#sf-status-kaisu-under15').val();  // ドロップボックスで選択された回数

    for (var i = 1; i <= sf_status_kaisu_under15; i++) {
      if(i <= 5) {
        sf_status_under15 = parseInt(sf_status_under15) + parseInt(2);

      }else if(i >= 6) {
        sf_status_under15 = parseInt(sf_status_under15) + parseInt(3);
      }
    };
    $('#sf-status-result-under15').val(sf_status_under15);
  });



  $('.sf-box').change(function(){                                      // ☆16〜の武器&防具の増加幅(攻撃or魔力)
    var sf_require_level = $('#sf-require-level').val();               // 装備するための必須レベル
    var sf_ama_over15 = $('#sf-ama-over15').val();                     // 入力された数値
    var sf_ama_kaisu_over15 = $('#sf-ama-kaisu-over15').val();         // ドロップボックスで選択された回数

    if(sf_require_level == 140 && sf_ama_kaisu_over15 == 1){           // REQ Lv:140の武器
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(7);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(15);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(23);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(32);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(42);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(53);

    }else if(sf_require_level == 140 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(65);


    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:150の武器
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(8);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(17);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(26);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(36);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(47);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(59);

    }else if(sf_require_level == 150 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(72);


    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:160の武器
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(9);

    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(18);

    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(28);

    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(39);

    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(51);
      
    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(64);

    }else if(sf_require_level == 160 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(78);


    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:200の武器
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(13);
      
    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(27);

    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(41);

    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(56);

    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(71);

    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(87);

    }else if(sf_require_level == 200 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(104);


    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 1){    // REQ Lv:140の防具
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(8);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(17);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(27);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(38);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(50);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(63);

    }else if(sf_require_level == 141 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(78);


    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:150の防具
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(9);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(19);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(30);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(42);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(55);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(69);

    }else if(sf_require_level == 151 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(85);


    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:160の防具
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(10);

    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(21);

    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(33);

    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(46);

    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(60);
      
    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(75);

    }else if(sf_require_level == 161 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(92);


    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 1) {    // REQ Lv:200の防具
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(12);
      
    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 2) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(25);

    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 3) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(39);

    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 4) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(54);

    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 5) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(70);

    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 6) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(87);

    }else if(sf_require_level == 201 && sf_ama_kaisu_over15 == 7) {
      sf_ama_over15 = parseInt(sf_ama_over15) + parseInt(106);
    }
    $('#sf-ama-result-over15').val(sf_ama_over15)
  });



  $('.sf-box').change(function(){                                      // ☆16〜の武器&防具の増加幅(メインステータス)
    var sf_require_level = $('#sf-require-level').val();               // 装備するための必須レベル
    var sf_status_over15 = $('#sf-status-over15').val();               // 入力された数値
    var sf_status_kaisu_over15 = $('#sf-status-kaisu-over15').val();   // ドロップボックスで選択された回数

    if(sf_require_level == 140 && sf_status_kaisu_over15 == 1){        // REQ Lv:140の武器
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(9);

    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(18);

    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(27);

    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(36);
    
    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(45);
    
    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(54);

    }else if(sf_require_level == 140 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(63);


    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 1) { // REQ Lv:150の武器
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(11);
    
    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(22);

    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(33);

    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(44);

    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(55);

    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(66);

    }else if(sf_require_level == 150 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(77);


    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 1) { // REQ Lv:160の武器
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(13);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(26);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(39);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(52);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(65);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(78);

    }else if(sf_require_level == 160 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(91);


    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 1) { // REQ Lv:200の武器
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(15);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(30);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(45);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(60);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(75);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(90);

    }else if(sf_require_level == 200 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(105);
    

    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 1){ // REQ Lv:140の防具
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(9);

    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(18);

    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(27);

    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(36);
    
    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(45);
    
    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(54);

    }else if(sf_require_level == 141 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(63);


    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 1) { // REQ Lv:150の防具
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(11);
    
    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(22);

    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(33);

    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(44);

    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(55);

    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(66);

    }else if(sf_require_level == 151 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(77);


    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 1) { // REQ Lv:160の防具
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(13);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(26);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(39);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(52);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(65);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(78);

    }else if(sf_require_level == 161 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(91);


    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 1) { // REQ Lv:200の防具
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(15);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 2) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(30);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 3) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(45);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 4) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(60);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 5) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(75);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 6) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(90);

    }else if(sf_require_level == 201 && sf_status_kaisu_over15 == 7) {
      sf_status_over15 = parseInt(sf_status_over15) + parseInt(105);
    }
    $('#sf-status-result-over15').val(sf_status_over15)
  });
});