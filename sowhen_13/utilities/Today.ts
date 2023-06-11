class Today {
    private today: Date;
    constructor() {
        this.today = new Date();
    }
    get toString() {
        const month = (this.today.getMonth()+1).toString();
        const day = this.today.getDay().toString();
        const hour = this.today.getHours().toString();
        const minute = this.today.getMinutes().toString();
        const seconds = this.today.getSeconds().toString();
        const milliseconds = this.today.getMilliseconds().toString();
        return month+day+hour+minute+seconds+milliseconds;
    }
    get date() {
        return this.today;
    }
}

export default Today;