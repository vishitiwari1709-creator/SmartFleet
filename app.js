// Main Application Logic
class PredictiveMaintenanceApp {
    constructor() {
        this.init();
    }

    init() {
        this.initializeCharts();
        this.loadAlerts();
        this.startRealTimeUpdates();
        this.setupEventListeners();
    }

    initializeCharts() {
        // Charts are initialized in charts.js
        initFailureChart();
        initSensorChart();
        initHealthChart();
    }

    loadAlerts() {
        const alertsContainer = document.getElementById('alertsList');
        const alerts = [
            {
                id: 1,
                title: "High Vibration Detected",
                description: "Motor M-042 shows abnormal vibration patterns",
                severity: "high",
                time: "2 hours ago",
                equipment: "Motor M-042"
            },
            {
                id: 2,
                title: "Temperature Rising",
                description: "Compressor C-115 temperature above normal range",
                severity: "medium",
                time: "4 hours ago",
                equipment: "Compressor C-115"
            },
            {
                id: 3,
                title: "Maintenance Due",
                description: "Routine maintenance scheduled for Pump P-208",
                severity: "low",
                time: "1 day ago",
                equipment: "Pump P-208"
            }
        ];

        alertsContainer.innerHTML = alerts.map(alert => `
            <div class="alert-item alert-${alert.severity}">
                <div class="alert-header">
                    <span class="alert-title">${alert.title}</span>
                    <span class="alert-time">${alert.time}</span>
                </div>
                <div class="alert-desc">${alert.description}</div>
                <div class="alert-equipment">Equipment: ${alert.equipment}</div>
            </div>
        `).join('');
    }

    startRealTimeUpdates() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateSensorData();
            this.updateMetrics();
        }, 5000);
    }

    updateSensorData() {
        const sensors = ['temperature', 'vibration', 'pressure', 'rotation'];
        const sensorCards = document.querySelectorAll('.sensor-card');
        
        sensorCards.forEach((card, index) => {
            const valueElement = card.querySelector('.sensor-value');
            const statusElement = card.querySelector('.sensor-status');
            
            // Simulate small changes in sensor values
            const currentValue = parseFloat(valueElement.textContent);
            const change = (Math.random() - 0.5) * 2;
            const newValue = Math.max(0, currentValue + change);
            
            valueElement.textContent = newValue.toFixed(1) + 
                (index === 0 ? '°C' : index === 1 ? ' mm/s' : index === 2 ? ' psi' : ' RPM');
            
            // Update status based on value
            if (newValue > (index === 1 ? 5 : index === 0 ? 70 : index === 2 ? 140 : 3000)) {
                statusElement.textContent = 'Warning';
                statusElement.className = 'sensor-status warning';
            } else if (newValue > (index === 1 ? 8 : index === 0 ? 80 : index === 2 ? 160 : 3200)) {
                statusElement.textContent = 'Critical';
                statusElement.className = 'sensor-status critical';
            } else {
                statusElement.textContent = 'Normal';
                statusElement.className = 'sensor-status normal';
            }
        });
    }

    updateMetrics() {
        // Simulate metric updates
        const metricValues = document.querySelectorAll('.metric-value');
        const metricTrends = document.querySelectorAll('.metric-trend');
        
        // Small random changes to metrics
        metricValues.forEach((metric, index) => {
            if (index === 0) { // Equipment Health
                const current = parseFloat(metric.textContent);
                const change = (Math.random() - 0.3) * 2;
                const newValue = Math.max(0, Math.min(100, current + change));
                metric.textContent = newValue.toFixed(0) + '%';
            } else if (index === 1) { // Active Alerts
                const current = parseInt(metric.textContent);
                const change = Math.random() > 0.7 ? 1 : Math.random() > 0.9 ? -1 : 0;
                const newValue = Math.max(0, current + change);
                metric.textContent = newValue;
            }
        });
    }

    setupEventListeners() {
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Here you would typically load different sections
                console.log('Navigating to:', link.getAttribute('href'));
            });
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PredictiveMaintenanceApp();
});
