module.exports = (query, word) => {
    word = word.toLowerCase()
    if (word.includes(query.toLowerCase())) {
        return true;
    }
    return checkPattern(query.toLowerCase() , word)
}

function checkPattern(query, word) { 
    for (let i = 0; i < query.length; i++) {
        let charac = query[i]
        let charIndex = word.indexOf(charac)
        if(charIndex === -1) return false;
        word = word.slice(charIndex+1,word.length)
    }
    return true;
} 
