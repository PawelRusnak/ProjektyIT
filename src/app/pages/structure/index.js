import React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkHorizontalLine } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';
import { LinearGradient } from '@vx/gradient';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const lightpurple = '#374469';
const bg = '#fafafa';

const tree = {
  "name": "Imię Nazwisko",
  "children": [{
    "name": "Imię Nazwisko",
    "children": [
      { "name": "Imię Nazwisko" },
      { "name": "Imię Nazwisko" },
      { "name": "Imię Nazwisko" },
      {
        "name": "Imię Nazwisko",
        "children": [{
          "name": "Imię Nazwisko",
        }, {
          "name": "Imię Nazwisko",
          "children": [{
            "name": "Imię Nazwisko"
          }, {
            "name": "Imię Nazwisko"
          }, {
            "name": "Imię Nazwisko"
          }]
        }]
      },
    ]
  },
  {
    "name": "Imię Nazwisko",
    "children": [
      { "name": "Imię Nazwisko" },
      { "name": "Imię Nazwisko" },
      { "name": "Imię Nazwisko" },
    ]
  },
  ],
};

function Node({ node }) {
  const width = 75;
  const height = 40;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={bg}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          alert(`Kliknięto: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={'black'}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

const Structure = ({
  width = 1300,
  height = 500,
  margin = {
    top: 0,
    left: 50,
    right: 50,
    bottom: 0
  }
}) => {
  const data = hierarchy(tree);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return (<>
    <div>Przykładowy Diagram Drzewa Organizacji Firmy</div>
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      <rect width={width} height={height} rx={14} fill={bg} />
      <Tree root={data} size={[yMax, xMax]}>
        {tree => {
          return (
            <Group top={margin.top} left={margin.left}>
              {tree.links().map((link, i) => {
                return (
                  <LinkHorizontalLine
                    key={`link-${i}`}
                    data={link}
                    stroke={lightpurple}
                    strokeWidth="1"
                    fill="none"
                  />
                );
              })}
              {tree.descendants().map((node, i) => {
                return <Node key={`node-${i}`} node={node} />;
              })}
            </Group>
          );
        }}
      </Tree>
    </svg></>
  );
};

export default Structure;