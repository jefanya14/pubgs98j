	var login = new Audio();
	login.src = "media/login.mp3";

	var tutup = new Audio();
	tutup.src = "media/tutup.mp3";

	var button = new Audio();
	button.src = "media/button.mp3";

	var click_new = new Audio();
	click_new.src = "media/click_new.mp3";

	var putaran = new Audio();
	putaran.src = "media/putaran.mp3";

	$(document).ready(function() {
		$('#music_on').on('click',function(){
        		var audio = $('#audio')[0];
        		audio.play();
        		$(this).hide();
        		$('#music_off').show();
        	});
		$('#music_off').on('click',function(){
        		var audio = $('#audio')[0];
        		audio.pause();
        		$(this).hide();
        		$('#music_on').show();
        	});
	});

const hadiah = {
    0: 'img/reward/1.png',
    1: 'img/reward/2.png',
    2: 'img/reward/3.png',
    3: 'img/reward/4.png',
    4: 'img/reward/5.png',
    5: 'img/reward/6.png',
};

const jumlah_hadiah = 6;
const minimal_lompat = 30; 
let shagitz = -1;
let lompat = 0;
let kecepatan = 30;
let waktu = 0;
let hadiahnya = -1;

function putarkan() {
    $(`[data-order="${shagitz}"]`).removeClass('border_hadiah');

    shagitz += 1;

    if (shagitz > jumlah_hadiah - 1) {
        shagitz = 0;
    }

    $(`[data-order="${shagitz}"]`).addClass('border_hadiah');
}

function acakHadiah() {
    return Math.floor(Math.random() * jumlah_hadiah);
}

function pengaturanWaktu() {
    lompat += 1;
    putarkan();
    if (lompat > minimal_lompat + 10 && hadiahnya === shagitz) {
        clearTimeout(waktu);
        
        $('.gift_img').attr('src',hadiah[shagitz]);
        setTimeout(function() { 
           $('.itemReward_confirmation').fadeIn('fast');
        }, 100);
        setTimeout(function() { 
           $('.btn1').fadeIn('slow');
        }, 700);

        hadiahnya = -1;
        lompat = 0;

    } else {
        if (lompat < minimal_lompat) {
            kecepatan -= 5; 
        } else if (lompat === minimal_lompat) {
            const nomor_acak = acakHadiah();
            hadiahnya = nomor_acak;
        } else {
            if ( (lompat > minimal_lompat + 10) && hadiahnya === (shagitz + 1) ) {
                kecepatan += 600;
            } else {
                kecepatan += 20; 
            }
        }
        if (kecepatan < 40) {
            kecepatan = 40;
        }
        waktu = setTimeout(pengaturanWaktu, kecepatan);
    }
}

function gaskeun() {
	var putaran = new Audio();
		putaran.src = "media/putaran.mp3";
		putaran.play();
    lompat = 0;
    kecepatan = 70;
    hadiahnya = -1;
    pengaturanWaktu();
}

$(document).ready(() => {
    $('.putarkan').on('click', gaskeun);
});
 
 // hadiah 5
const hadiah5 = {
    0: 'img/reward/1.png',
    1: 'img/reward/2.png',
    2: 'img/reward/3.png',
    3: 'img/reward/4.png',
    4: 'img/reward/5.png',
    5: 'img/reward/6.png',
    6: 'img/reward/7.png',
    7: 'img/reward/8.png',
    8: 'img/reward/9.png'
};

const jumlah_hadiah5 = 9;
const minimal_lompat5 = 30; 
let shagitz5 = -1;
let lompat5 = 0;
let kecepatan5 = 30;
let waktu5 = 0;
let hadiahnya5 = -1;

function putarkan5() {
    $(`[data-order="${shagitz5}"]`).removeClass('border_hadiah');

    shagitz5 += 1;

    if (shagitz5 > jumlah_hadiah5 - 1) {
        shagitz5 = 0;
    }

    $(`[data-order="${shagitz5}"]`).addClass('border_hadiah');
}

function acakHadiah5() {
    return Math.floor(Math.random() * jumlah_hadiah5);
}

function pengaturanWaktu5() {
    lompat5 += 1;
    putarkan5();
    if (lompat5 > minimal_lompat5 + 10 && hadiahnya5 === shagitz5) {
        clearTimeout(waktu5);
        hadiahnya5 = -1;
        lompat5 = 0;

    } else {
        if (lompat5 < minimal_lompat5) {
            kecepatan5 -= 5; 
        } else if (lompat5 === minimal_lompat5) {
            const nomor_acak = acakHadiah5();
            hadiahnya5 = nomor_acak;
        } else {
            if ( (lompat5 > minimal_lompat5 + 10) && hadiahnya5 === (shagitz5 + 1) ) {
                kecepatan5 += 600;
            } else {
                kecepatan5 += 20; 
            }
        }
        if (kecepatan5 < 40) {
            kecepatan5 = 40;
        }
        waktu5 = setTimeout(pengaturanWaktu5, kecepatan5);
    }
}