export function crypt(email) {
    let cryptedEmail = '3a.1B4c1D5e9F2g6H4i3J8k2L6m4N3o3P8q4R6s2T6u4V3w3X8y4Z6a5B9c7D9e3F2g0';
    return cryptedEmail+email;
}

export function decrypt(cryptedEmail) {
    const splited = cryptedEmail.split('c7D9e3F2g0');
    return splited[1];
}