

$(function () {
  chrome.storage.local.get('data', function (items) {
    var gotdata = items.data;
    $(".rq0escxv.lpgh02oy.du4w35lb.pad24vr5.rirtxc74.dp1hu0rb.fer614ym.hlyrhctz.o387gat7.qbu88020.ni8dbmo4.stjgntxs.czl6b2yu").html(gotdata);
    $(".j83agx80.l9j0dhe7.k4urcfbm").css("display","none");
    $(".tn7ubyq0.d2edcug0.rq0escxv").css("display","none");
    $(".isi1j7uv.qwnj5y1i.pmk7jnqg.fpf4h9qb.gsapk3bl.nr3idzxk.cur7e4n5.ocebsr1h").css("display","none");

    
    
    // $("._64a").html(gotdata);

  });
})

//clear element of note
$(document).on('click', '.clear', (value) => {
  //get value of click button
  var model = "<button class=\"clear\" value=\"" + value.target.value + "\" style=\"background-color: #a8d8ea;border: none;\">∙ " + value.target.value + "</button></br>";
  chrome.storage.local.get('data', function (items) {
    //check equal and remove
    for (var i = items.data.length - 1; i >= 0; i--) {
      if (items.data[i] === model) {
        items.data.splice(i, 1);
      }
      //upadte new array note to stogare and set note to tab(facebook)
      chrome.storage.local.set({ data: items.data }, function () {
        var gotdata = items.data;

        $(".rq0escxv.lpgh02oy.du4w35lb.pad24vr5.rirtxc74.dp1hu0rb.fer614ym.hlyrhctz.o387gat7.qbu88020.ni8dbmo4.stjgntxs.czl6b2yu").html(gotdata);
        // $("._64a").html(gotdata);

      });
    }
  });
})