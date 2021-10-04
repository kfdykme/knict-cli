import * as CliMethod from '../method/CliMethod'
import {Knict} from 'knict'
import { CliClientBuilder } from '../client/CliClientBuilder'

export class BasicCliService {

    @CliMethod.Input()
    login(@CliMethod.Str('username') username: string, @CliMethod.Password('password') password: string): any {
        return {
            username:'',
            password: ''
        }
    }

    @CliMethod.Choice('home')
    home(...args: string[]):any {
        return args
    }
}



export const basicCliService = Knict.builder(new CliClientBuilder()).create(new BasicCliService())
