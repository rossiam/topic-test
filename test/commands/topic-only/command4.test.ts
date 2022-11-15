import {expect, test} from '@oclif/test'

describe('topic-only:command4', () => {
  test
  .stdout()
  .command(['topic-only:command4'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['topic-only:command4', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
