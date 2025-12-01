export class Transaction {
    constructor (
        public readonly type: TypeTransaction,
        public readonly value: number
    ) {}
}

export enum TypeTransaction {
    DEPOSIT = 'depósito',
    WITHDRAWAL = 'saque'
}
