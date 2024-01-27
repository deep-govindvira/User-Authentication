function getBlogList() {
    return JSON.parse(localStorage.getItem('Bloglist')) || [];
}

function setBlogList(updatedBlogList) {
    localStorage.setItem('Bloglist', JSON.stringify(updatedBlogList));
}

function getDatabase() {
    return JSON.parse(localStorage.getItem('database')) || {};
}

function setDatabase(updatedDatabase) {
    localStorage.setItem('database', JSON.stringify(updatedDatabase));
}

function getHistory(email) {
    return getDatabase()[email]["history"] || [];
}

function setHistory(email, updatedHistory) {
    let updatedDatabase = getDatabase();
    updatedDatabase[email]["history"] = updatedHistory;
    setDatabase(updatedDatabase);
}

function addNewTransaction(email, newTransaction) {
    let updatedHistory = getHistory(email);
    updatedHistory.push(newTransaction);
    setHistory(email, updatedHistory);
}

function deleteTransaction(email, id) {
    let updatedHistory = getHistory(email);
    updatedHistory = updatedHistory.filter(history => history.id != id);
    setHistory(email, updatedHistory);
    showHistory(getHistory(email));
    console.log("main.html : \n\n");
    console.log("Database : \n", getDatabase());
    console.log("Current Database : \n", getDatabase()[email]);
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function getFormattedDate(time) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date(time);
    return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()} ${formatAMPM(d)}`;
}