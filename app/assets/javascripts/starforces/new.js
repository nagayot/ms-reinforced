$(function () {
  $('#sf-ama').change(function(){
    var sf_ama = $('#sf-ama').val();                                       // 攻撃力/魔力
    var sf_ama_kaisu = $('#sf-kaisu-ama').val();                           // 強化回数
    var sf_ama_plus = '+';                                                 // 強化値
    var sf_ama_result = parseInt(sf_ama) + parseInt(sf_ama_kaisu * sf_ama_plus); // 結果 = (攻撃/魔力) + (強化回数 * 強化値)

    // 強化回数分繰り返す
    for (var i = 1; i <= sf_ama_kaisu; i++) {
      if (sf_ama >= 50 && sf_ama <= 99) {            // 50以上、99以下の場合、+2
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+2'(sf_ama_plus));

      }else if (sf_ama >= 100 && sf_ama <= 149) {    // 100以上、149以下の場合、+3 ...以下同様
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+3'(sf_ama_plus));

      }else if (sf_ama >= 150 && sf_ama <= 199) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+4'(sf_ama_plus));

      }else if (sf_ama >= 200 && sf_ama <= 249) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+5'(sf_ama_plus));

      }else if (sf_ama >= 250 && sf_ama <= 299) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+6'(sf_ama_plus));

      }else if (sf_ama >= 300 && sf_ama <= 349) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+7'(sf_ama_plus));

      }else if (sf_ama >= 350 && sf_ama <= 399) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+8'(sf_ama_plus));

      }else if (sf_ama >= 400 && sf_ama <= 449) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+9'(sf_ama_plus));

      }else if (sf_ama >= 450 && sf_ama <= 499) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+10'(sf_ama_plus));

      }else if (sf_ama >= 500 && sf_ama <= 549) {
        sf_ama_result == parseInt(sf_ama) + [i].parseInt((sf_ama_kaisu) * '+11'(sf_ama_plus));
      }
    
    };
    $('#sf-ama-result').val(sf_ama_result);
    //$('#sf-ama-result').val(sf_ama);
  });
});
//for (var i = 50; i < 100; i+2 ){
  //if ('#sf-ama' > 49 && '#sf-ama' < 100){
    //'#sf-ama-result' == parseInt('#sf-ama' + 2)     // 50以上、99以下、+2

  //}else if ('#sf-ama' > 99 && '#sf-ama' < 150){
    //'#sf-ama-result' == parseInt('#sf-ama' + 3)     // 100以上、149以下、+3

  //}
//};
