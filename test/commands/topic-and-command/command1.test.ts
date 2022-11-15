import {expect, test} from '@oclif/test'

describe('topic-and-command:command1', () => {
  test
  .stdout()
  .command(['topic-and-command:command1'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['topic-and-command:command1', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
