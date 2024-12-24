let target = document.getElementById('test-input');
target.addEventListener('blur', function() {
    let span = document.getElementById('text01');
    span.innerHTML = target.value;
});
