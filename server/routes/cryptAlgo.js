function crypt(email) {
    let cryptedEmail = '3a1B4c1D5e9F2g6H4i3J8k2L6m4N3o3P8q4R6s2T6u4V3w3X8y4Z6a5B9c7D9e3F2g0';
    const noDots = email.replace('.', '%2E');
    const noArroba = noDots.replace('@', '%40');
    return cryptedEmail+noArroba;
}

function decrypt(cryptedEmail) {
    const splited = cryptedEmail.split('c7D9e3F2g0');
    const uncrypted = splited[1];
    const withArroba = uncrypted.replace('%40', '@');
    const withDots = withArroba.replace('%2E', '.');
    return withDots;
}

module.exports = { crypt, decrypt };