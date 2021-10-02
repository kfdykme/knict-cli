import { Knict } from 'knict'
import { CliClientBuilder } from './client/CliClientBuilder'
import * as Demo from './demo/BasicCliService'

import * as CliMethod from './method/CliMethod'
import { logger } from './common/Logger'
const toggleLog = logger.toggle

export {
    Knict,
    CliClientBuilder,
    Demo,
    CliMethod,
    toggleLog
}