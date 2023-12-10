
function simpleSearch(query, word) {
    word = word.replace(/[^\w\s]/g, '').toLowerCase()
    if (word.startsWith(query.toLowerCase())) {
        return true;
    }
    // return checkPattern(query.toLowerCase() , word)
}


function projectSearch(query, location, status, payment, domain, project) {
    const queryOk = simpleSearch(query, project.title) || simpleSearch(query, project.domain[0]) 
    const statusOk = status === 'select' || (project.status === status)
    const paymentOk = payment === 'select' || (project.clientRequirements.paymentType === payment)
    const domainOk = domain === 'select' || (project.domain?.includes(domain))
    return queryOk && statusOk && paymentOk && domainOk
}

module.exports = {simpleSearch, projectSearch}

function checkPattern(query, word) { 
    for (let i = 0; i < query.length; i++) {
        let charac = query[i]
        let charIndex = word.indexOf(charac)
        if(charIndex === -1) return false;
        word = word.slice(charIndex+1,word.length)
    }
    return true;
} 
