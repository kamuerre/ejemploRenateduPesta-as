document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-panel');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Desactivar todos los botones y paneles
            buttons.forEach(btn => btn.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));

            // Activar el botón y panel correspondiente
            button.classList.add('active');
            const target = button.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
