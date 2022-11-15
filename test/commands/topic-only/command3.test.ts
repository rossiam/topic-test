import {expect, test} from '@oclif/test'

describe('topic-only:command3', () => {
  test
  .stdout()
  .command(['topic-only:command3'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['topic-only:command3', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
