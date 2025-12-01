import { nanoid } from "nanoid";

export class Transaction {
    readonly id = nanoid();
    readonly today = new Date();

    constructor(
        public readonly type: TypeTransaction,
        public readonly value: number
    ) { }
}

export enum TypeTransaction {
    DEPOSIT = 'depósito',
    WITHDRAWAL = 'saque'
}
