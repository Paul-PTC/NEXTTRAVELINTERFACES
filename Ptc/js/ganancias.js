// === Gráfica de Barras ===
const ctxGanancias = document.getElementById('graficaGanancias').getContext('2d');

new Chart(ctxGanancias, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ganancias ($)',
            data: [120, 250, 180, 320, 290, 420],
            backgroundColor: 'rgba(99, 102, 241, 0.7)',
            borderRadius: 12
        }]
    },
    options: {
        responsive: true,
         maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#111',
                    font: {
                        size: 13,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: '#cbd5e1'
                }
            },
            x: {
                ticks: {
                    color: '#111',
                    font: {
                        size: 13,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: 'transparent'
                }
            }
        }
    }
});

// === Gráfica Circular ===
const ctxCircular = document.getElementById('graficaCircular').getContext('2d');

new Chart(ctxCircular, {
    type: 'doughnut',
    data: {
        labels: ['Sitios', 'Empleados', 'Paquetes'],
        datasets: [{
            label: 'Cantidad',
            data: [10, 5, 15],
            backgroundColor: ['#4f46e5', '#06b6d4', '#3b82f6'],
            hoverOffset: 12
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: '#111',
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        }
    }
});
