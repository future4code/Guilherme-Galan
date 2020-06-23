function convertSeconds(seconds: number): string {
    if(seconds < 60){
        return `${seconds}s`
    }

    if(seconds < 3600){
        const minutes = (seconds / 60).toFixed(0)

        return `${minutes}m ${seconds % 60}s`
    }

    if(seconds > 3600){
        const hours = (seconds / 3600 ).toFixed(0)
        const minutes = (seconds % 3600 / 60).toFixed(0)
        const second = minutes % 60
        
        return `${hours}h ${minutes}m ${second}s`
    }
}