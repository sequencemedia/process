import debug from 'debug'
import process from 'node:process'

const log = debug('@sequencemedia/process')

export function handleSigHup (signal) {
  log('sigHup', signal)

  const {
    stdout
  } = process

  if ('clearLine' in stdout) {
    stdout.clearLine()
    stdout.cursorTo(0)
  }

  process.exit(0)
}

export function handleSigInt (signal) {
  log('sigInt', signal)

  const {
    stdout
  } = process

  if ('clearLine' in stdout) {
    stdout.clearLine()
    stdout.cursorTo(0)
  }

  process.exit(0)
}

export function handleSigBreak (signal) {
  log('sigBreak', signal)

  process.exit(0)
}

export function handleSigQuit (signal) {
  log('sigQuit', signal)

  process.exit(0)
}

export function handleSigTerm (signal) {
  log('sigTerm', signal)

  process.exit(0)
}

export function handleSigPipe (signal) {
  log('sigPipe', signal)
}

export function handleBeforeExit (code) {
  log('beforeExit', code)
}

export function handleExit (code) {
  log('exit', code)
}

export function handleUncaughtException ({ message }) {
  log('uncaughtException', message)

  process.exit(1)
}

export function handleUnhandledRejection (reason, promise) {
  log('unhandledRejection', reason, promise)

  process.exit(1)
}
