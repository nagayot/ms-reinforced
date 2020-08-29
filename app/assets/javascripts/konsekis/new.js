$(function() {
  $('.konseki-box').change(function(){                     // 各入力値を変更したら結果も変更される
    var k_ama_moto = $('#k-ama').val();
    var k_ama_kyouka = $('#kyouka-ama').val();
    var k_ama_kaisu = $('#k-kaisu').val();
    var k_ama_result = parseInt(k_ama_moto) + (parseInt(k_ama_kyouka) * parseInt(k_ama_kaisu))|0;
    $('#k-ama-result').val(k_ama_result);
  });

  $('.konseki-box').change(function(){                     // 各入力値を変更したら結果も変更される
    var k_status_moto = $('#k-status').val();
    var k_status_kyouka = $('#kyouka-status').val();
    var k_status_kaisu = $('#k-kaisu').val();
    var k_status_result = parseInt(k_status_moto) + (parseInt(k_status_kyouka) * parseInt(k_status_kaisu))|0;
    $('#k-status-result').val(k_status_result);
  });
});