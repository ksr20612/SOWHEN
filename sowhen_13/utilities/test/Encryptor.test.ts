import { expect } from '@jest/globals';
import { replaceSpecialStrings, getHashedText } from "../Encryptor";

describe("encrypt", () => {
    it('replace special strings into null', () => {
        const text = "/안녕하세요!!^^~;";
        const result = replaceSpecialStrings(text);
        expect(result).toEqual('안녕하세요');
    });
})