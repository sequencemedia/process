import process from 'node:process'

import {
  handleSigHup,
  handleSigInt,
  handleSigBreak,
  handleSigQuit,
  handleSigTerm,
  handleSigPipe,
  handleBeforeExit,
  handleExit,
  handleUncaughtException,
  handleUnhandledRejection
} from './common/index.mjs'

process
  .on('SIGHUP', handleSigHup)
  .on('SIGINT', handleSigInt)
  .on('SIGBREAK', handleSigBreak)
  .on('SIGQUIT', handleSigQuit)
  .on('SIGTERM', handleSigTerm)
  .on('SIGPIPE', handleSigPipe)
  .on('beforeExit', handleBeforeExit)
  .on('exit', handleExit)
  .on('uncaughtException', handleUncaughtException)
  .on('unhandledRejection', handleUnhandledRejection)
