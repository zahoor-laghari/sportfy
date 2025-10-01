 document.getElementById("guestbookForm").addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your feedback!");
      this.reset(); // Clear the form
    });