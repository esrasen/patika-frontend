document.addEventListener('DOMContentLoaded', function () {
 const liveToastBtn = document.getElementById('liveToastBtn');

    liveToastBtn.addEventListener('click', function () {
        newElement();
    });

    function newElement() {
        const inputValue = document.getElementById("task").value.trim();
        const list = document.getElementById("list");

        if (!inputValue) {
            $(".error").toast("show"); //Boş girilmez uyarısı ver
            return; // Eğer giriş boş ise fonksiyondan çık
        }
        const li = document.createElement("li");
        li.textContent = inputValue;
        list.appendChild(li); // Listeye öğeyi ekle
        document.getElementById("task").value = ""; // Input alanını temizle
        $(".success").toast("show");// Başarılı bir şekilde eklendiğine dair mesajı göster

        // Tıklanınca checked sınıfını ekleyip çıkarmak için click olayını dinle
        document.addEventListener("click", function () {
            this.classList.toggle("checked");
        });
        addCloseButtonToListItems();  // Yeni eklenenlere de silme ekler
    }

    /* yapıldı diye üstünü çizer */
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    });

    /* silme işlemini yapar */
    function addCloseButtonToListItems() {
        const listItems = document.querySelectorAll('#list li');

        listItems.forEach(function(item) {
            const closeButton = document.createElement('span');
            closeButton.textContent = '×';
            closeButton.className = 'close';
            item.appendChild(closeButton);

            closeButton.addEventListener('click', () => item.remove());
        });
    }
    addCloseButtonToListItems();
});