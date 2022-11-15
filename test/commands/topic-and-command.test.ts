import {expect, test} from '@oclif/test'

describe('topic-and-command', () => {
  test
  .stdout()
  .command(['topic-and-command'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['topic-and-command', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
