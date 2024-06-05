
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            saveProgress();
            toggleDone(this);
        });
    });
});

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    } else {
        element.classList.add('visible');
    }
}

function saveProgress() {
    const progress = {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        progress[index] = checkbox.checked;
    });
    localStorage.setItem('studyPlanProgress', JSON.stringify(progress));
}

function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('studyPlanProgress'));
    if (progress) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = progress[index] || false;
            if (checkbox.checked) {
                checkbox.nextElementSibling.classList.add('done');
            }
        });
    }
}

function toggleDone(checkbox) {
    if (checkbox.checked) {
        checkbox.nextElementSibling.classList.add('done');
    } else {
        checkbox.nextElementSibling.classList.remove('done');
    }
}


function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
