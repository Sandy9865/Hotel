(function () {
  var roomCards = document.querySelectorAll(".luxury-room-card");

  roomCards.forEach(function (card) {
    var roomName = card.querySelector("h2");
    var reserveLink = card.querySelector(".button");

    if (!roomName || !reserveLink) {
      return;
    }

    reserveLink.href = "contact.html?room=" + encodeURIComponent(roomName.textContent.trim());
  });
})();
