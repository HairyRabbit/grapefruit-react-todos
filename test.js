/* @flow */

const foo: 'foo' = 'foo'
const bar: 'bar' = 'bar'

const Actiontype = {
  foo: foo,
  bar: bar
}

type Action =
  | { type: typeof foo }
  | { type: typeof bar }

function update(act: Action): * {
	(act.type: typeof foo | typeof bar)
  ActionType.
}
