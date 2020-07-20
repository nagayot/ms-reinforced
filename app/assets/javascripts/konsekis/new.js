$(function() {
  $('#k-ama').change(function(){    //A/MAの計算
    var k_ama_moto = $('#k-ama').val();
    var k_ama_kyouka = $('#kyouka-ama').val();
    var k_ama_kaisu = $('#k-kaisu').val();
    var k_ama_kyouka_result = k_ama_kyouka * k_ama_kaisu;
    var k_ama_total_result = parseInt(k_ama_moto) + parseInt(k_ama_kyouka_result);
    $('#k-ama-result').val(k_ama_total_result);
  });

  $('#k-status').change(function(){    //メインステータスの計算
    var k_status_moto = $('#k-status').val();
    var k_status_kyouka = $('#kyouka-status').val();
    var k_status_kaisu = $('#k-kaisu').val();
    var k_status_kyouka_result = k_status_kyouka * k_status_kaisu;
    var k_status_total_result = parseInt(k_status_moto) + parseInt(k_status_kyouka_result);
    $('#k-status-result').val(k_status_total_result);
  });
});