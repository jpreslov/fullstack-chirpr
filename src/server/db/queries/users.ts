import { Query } from '../'
import type { TUsers } from '../models'

const all = () => Query<Array<TUsers>>('SELECT id, username FROM users');
const one = (userid: number) => Query<Array<TUsers>>('SELECT id, username FROM users WHERE id = ?', [userid])

export default {
    all,
    one
}