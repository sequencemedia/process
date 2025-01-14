import debug from 'debug'
import process from 'node:process'

const log = debug('@sequencemedia/process')

function hasClearLine () {
  const {
    stdout
  } = process

  return 'clearLine' in stdout
}

function clearLine () {
  const {
    stdout
  } = process

  stdout.clearLine()
  stdout.cursorTo(0)
}

export function handleSigHup (signal) {
  /**
   *  Clear the line before writing to `stdout`
   */
  if (hasClearLine()) clearLine()

  log('sigHup', signal)

  process.exit(0)
}

export function handleSigInt (signal) {
  /**
   *  Clear the line before writing to `stdout`
   */
  if (hasClearLine()) clearLine()

  log('sigInt', signal)

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
