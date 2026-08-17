(() => {
  const key = 23;
  const protectedAddress = [
    121, 109, 127, 118, 120, 87, 126, 120, 96, 118, 100, 99, 118, 99, 114, 57, 114, 115, 98,
  ];

  const recoverAddress = () =>
    String.fromCharCode(...protectedAddress.map((value) => value ^ key));

  document.querySelectorAll("[data-email]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.assign(`${String.fromCharCode(109, 97, 105, 108, 116, 111, 58)}${recoverAddress()}`);
    });
  });
})();
