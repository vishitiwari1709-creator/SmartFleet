// Chart Initialization and Management
function initFailureChart() {
    const ctx = document.getElementById('failureChart').getContext('2d');
    
    const failureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Failure Probability',
                data: [12, 19, 8, 15, 7, 11, 9],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Predicted Failures',
                data: [10, 14, 9, 12, 8, 10, 8],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Probability (%)'
                    }
                }
            }
        }
    });
}

function initSensorChart() {
    const ctx = document.getElementById('sensorChart').getContext('2d');
    
    const sensorChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temp', 'Vibration', 'Pressure', 'Speed', 'Load', 'Efficiency'],
            datasets: [{
                label: 'Current Values',
                data: [68, 42, 125, 85, 78, 92],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(14, 165, 233, 0.8)'
                ],
                borderColor: [
                    '#ef4444',
                    '#f59e0b',
                    '#3b82f6',
                    '#10b981',
                    '#8b5cf6',
                    '#0ea5e9'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        }
    });
}

function initHealthChart() {
    const ctx = document.getElementById('healthChart').getContext('2d');
    
    const healthChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Excellent', 'Good', 'Fair', 'Poor', 'Critical'],
            datasets: [{
                data: [25, 40, 20, 10, 5],
                backgroundColor: [
                    '#10b981',
                    '#34d399',
                    '#f59e0b',
                    '#f97316',
                    '#ef4444'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '60%'
        }
    });
}

// Update charts with new data
function updateCharts(newData) {
    // This function would be called when new data is available
    console.log('Updating charts with new data:', newData);
}
