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

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigHup (signal) {
  /**
   *  Clear the line before writing to `stdout`
   */
  if (hasClearLine()) clearLine()

  log('handleSigHup', signal)

  process.exit(0)
}

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigInt (signal) {
  /**
   *  Clear the line before writing to `stdout`
   */
  if (hasClearLine()) clearLine()

  log('handleSigInt', signal)

  process.exit(0)
}

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigBreak (signal) {
  log('handleSigBreak', signal)

  process.exit(0)
}

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigQuit (signal) {
  log('handleSigQuit', signal)

  process.exit(0)
}

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigTerm (signal) {
  log('handleSigTerm', signal)

  process.exit(0)
}

/**
 *  @param {string} signal
 *  @returns {void}
 */
export function handleSigPipe (signal) {
  log('handleSigPipe', signal)
}

/**
 *  @param {number} code
 *  @returns {void}
 */
export function handleBeforeExit (code) {
  log('handleBeforeExit', code)
}

/**
 *  @param {number} code
 *  @returns {void}
 */
export function handleExit (code) {
  log('handleExit', code)
}

/**
 *  @param {Error} error
 *  @returns {void}
 */
export function handleUncaughtException ({ message }) {
  log('handleUncaughtException', message)

  process.exit(1)
}

/**
 *  @param {string} reason
 *  @param {Promise<unknown>} promise
 *  @returns {void}
 */
export function handleUnhandledRejection (reason, promise) {
  log('handleUnhandledRejection', reason, promise)

  process.exit(1)
}
