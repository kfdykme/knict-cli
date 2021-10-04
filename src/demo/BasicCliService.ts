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

    @CliMethod.Choise('home')
    home(message1: string, message2 :string, message3 :string):any {
        return {
            message1,
            message2,
            message3
        }
    }
}



export const basicCliService = Knict.builder(new CliClientBuilder()).create(new BasicCliService())
