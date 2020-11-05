import { expect } from 'chai'
import { getMessage } from '../src/hello_world'

describe("Hello World", () => {
    it('should return a hello world msg', () => {
        expect(getMessage()).to.eq('Hello World')
    })
})
