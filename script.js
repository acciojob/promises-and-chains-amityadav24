document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();

  if (nameInput === "" || ageInput === "") {
    alert("Please enter valid details");
    return;
  }

  const age = Number(ageInput);

  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(nameInput);
      } else {
        reject(nameInput);
      }
    }, 4000);
  });

  votePromise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
