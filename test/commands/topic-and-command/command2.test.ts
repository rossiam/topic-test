import {expect, test} from '@oclif/test'

describe('topic-and-command:command2', () => {
  test
  .stdout()
  .command(['topic-and-command:command2'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['topic-and-command:command2', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
