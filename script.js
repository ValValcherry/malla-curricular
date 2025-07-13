document.querySelectorAll('.ramo').forEach((el) => {
  el.addEventListener('click', () => {
    const info = el.getAttribute('data-info');
    document.getElementById('info-box').innerText = info;
  });
});
