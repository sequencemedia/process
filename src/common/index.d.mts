export function handleSigHup (signal: string): void

export function handleSigInt (signal: string): void

export function handleSigBreak (signal: string): void

export function handleSigQuit (signal: string): void

export function handleSigTerm (signal: string): void

export function handleSigPipe (signal: string): void

export function handleBeforeExit (code: number): void

export function handleExit (code: number): void

export function handleUncaughtException ({ message }: Error): void

export function handleUnhandledRejection (reason: string, promise: Promise<unknown>): void
