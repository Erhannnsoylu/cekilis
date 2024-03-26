
document.addEventListener("DOMContentLoaded", function() {
  var katilimcilarTextarea = document.querySelector('textarea[name="katilimcilar"]');
  var cekilisIsmiInput = document.querySelector('.cekilis-ismi');
  var kazanacakSayisiInput = document.querySelector('.kazanacak-sayisi');
  var kazananKisiInput = document.querySelector('.kazanan-kisi');
  var kazananBelirleButton = document.querySelector('button');


  function kazananKişiBelirle() {
      
      var katilimcilar = katilimcilarTextarea.value.split('\n');

      
      katilimcilar = katilimcilar.filter(function(katilimci) {
          return katilimci.trim() !== '';
      });

      
      var kazanacakSayisi = parseInt(kazanacakSayisiInput.value);

      
      if (katilimcilar.length < kazanacakSayisi) {
          alert("Katılımcı sayısı, kazanacak kişi sayısından az olamaz!");
          return;
      }

      
      katilimcilar = shuffleArray(katilimcilar);

      
      var kazananlar = katilimcilar.slice(0, kazanacakSayisi);

      
      kazananKisiInput.value = kazananlar.join(', ');
  }

  
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

  
  kazananBelirleButton.addEventListener('click', kazananKişiBelirle);
});
