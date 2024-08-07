// class to track logs and store them in the local storage
class Logger {
    constructor(key) {
        this.storageKey = key;
        this.logs = this.loadLogs();
    }

    loadLogs() {
        const logs = localStorage.getItem(this.storageKey);
        return logs ? JSON.parse(logs) : [];
    }

    saveLogs() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.logs));
    }

    getCurrentTimestamp() {
        return new Date().toLocaleString();
    }

    addLog(log) {
        const logTimeStamp = {
            log,
            timestamp: this.getCurrentTimestamp(),
        };
        this.logs.push(logTimeStamp);
        this.saveLogs();
        console.log(`[Logger]: ${logTimeStamp.timestamp} - ${log}`);
    }

    clearLogs() {
        this.logs = [];
        this.saveLogs();
        console.log('[Logger]: Logs cleared');
    }

    getLogs() {
        return this.logs;
    }
}

export default Logger;
