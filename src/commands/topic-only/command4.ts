import {Command, Flags} from '@oclif/core'

export default class TopicOnlyCommand4 extends Command {
  static description = 'subcommand 4 of topic-only'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TopicOnlyCommand4)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/rossstenersen/dev/topic-test/src/commands/topic-only/command4.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
