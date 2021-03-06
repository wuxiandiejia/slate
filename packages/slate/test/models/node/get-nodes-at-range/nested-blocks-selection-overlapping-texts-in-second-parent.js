/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <value>
    <document>
      <quote key="a">
        <quote key="b">
          <paragraph key="c">
            <text key="d">one</text>
          </paragraph>
        </quote>
        <quote key="e">
          <paragraph key="f">
            <text key="g">
              <anchor />two
            </text>
          </paragraph>
          <paragraph key="h">
            <text key="i">three</text>
          </paragraph>
          <paragraph key="j">
            <text key="k">
              f<focus />our
            </text>
          </paragraph>
        </quote>
      </quote>
      <paragraph key="l">
        <text key="m">five</text>
      </paragraph>
    </document>
  </value>
)

export default function({ document, selection }) {
  return document
    .getNodesAtRange(selection)
    .map(n => n.key)
    .toArray()
}

export const output = ['a', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
