import crypto from "crypto";

export const getHashedText = (...texts: string[]) => {
    const joinedText = texts.join('xox');
    return crypto.createHash("sha512").update(joinedText).digest('base64'); 
}