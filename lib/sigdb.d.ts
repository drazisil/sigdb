declare module 'sigdb' {
    export type FileSignatureRecord = {
        name: string,
        signature: Buffer
    }

    export class SigDB {
        find(haystack: Buffer): FileSignatureRecord | undefined  {}
    }
}