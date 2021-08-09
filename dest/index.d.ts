/// <reference types="node" />
export interface FileSignatureRecord {
    id: string;
    name: string;
    signature: Buffer;
}
/** Class for manager file signatures (sometimes known as magic numbers) */
export declare class SigDB {
    private fileSignatures;
    /** @deprecated please use loadSignatureDatabase() instead */
    constructor();
    /**
     * Provided a buffer of binary bytes, will return either the matching signature name as a string, or `undefined`
     *
     * @param {Buffer} haystack
     * @memberof SigDB
     * @returns FileSignatureRecord | undefined
     */
    find(haystack: Buffer): FileSignatureRecord | undefined;
    /**
     * Get an array of signature names in the database
     * @memberof SigDB
     * @returns {string[]}
     */
    getSignatureNames(): string[];
    /**
     * Add a file signature
     * @param {string} id
     * @param {string} name
     * @param {Buffer} signature
     */
    addFileSignature(id: string, name: string, signature: Buffer): void;
}
export declare function loadSignatureDatabase(): SigDB;
//# sourceMappingURL=index.d.ts.map