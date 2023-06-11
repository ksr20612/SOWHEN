import crypto from "crypto";

export const replaceSpecialStrings = (text: string) => {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    return text.replace(reg, '');
}

export const getHashedText = (...texts: string[]) => {
    const joinedText = replaceSpecialStrings(texts.join(process.env.HASHTEXT));
    return crypto.createHash("sha512").update(joinedText).digest('base64'); 
}