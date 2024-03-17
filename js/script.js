$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 88;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

document.getElementById("navbtn").onclick = function () {
	document.querySelector('html').classList.toggle('open');
}

// セクションをクリックした際にナビゲーションメニューを閉じる
document.addEventListener("DOMContentLoaded", function () {
	var navLinks = document.querySelectorAll('.nav a');

	navLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			document.querySelector('html').classList.remove('open');
		});
	});
});

