document.getElementById('moremobile').addEventListener('click', function (event) {
    event.stopPropagation();

    var sidebar = document.querySelector('.sidebar');
    var sideback = document.querySelector('.sideback');

    if (!sidebar || !sideback) {
        console.error('Error: Sidebar or sideback element not found');
        return;
    }

    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sideback.style.opacity = '0';

        // 투명도가 0이 되고 나서 display를 'none'으로 변경
        setTimeout(function() {
            sideback.style.display = 'none';
        }, 1000);
    } else {
        sidebar.classList.add('sidebar-open');
        sideback.style.display = 'block';

        // display를 'block'으로 변경 후 다음 프레임에서 투명도를 조절
        setTimeout(function() {
            sideback.style.opacity = '0.5';
        }, 0);
    }

    document.addEventListener('mouseup', function (e) {
        var targetElement = e.target;

        if (!sidebar.contains(targetElement) && targetElement.id !== 'moremobile') {
            sidebar.classList.remove('sidebar-open');
            sideback.style.opacity = '0';
            
            // 투명도가 0이 되고 나서 display를 'none'으로 변경
            setTimeout(function() {
                sideback.style.display = 'none';
            }, 1000);

            document.removeEventListener('mouseup', arguments.callee);
        }
    });
});
