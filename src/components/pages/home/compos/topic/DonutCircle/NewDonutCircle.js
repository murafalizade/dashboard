import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import './DonutCircle.scss'

    const MyResponsivePie = ({ data /* see data tab */ }) => (
        <ResponsivePie 
            className='donut'    
            width='310'
            fit={true}
            data={data}
            margin={{ top: 40, right: 100, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            enableArcLabels={false}
        
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#000"
            arcLinkLabelsThickness={1}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}

            legends={
                [
                {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 85,
                    translateY:10,
                    itemsSpacing: 7,
                    itemWidth: 50,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]
        }
        />
  )



  const CustomSymbolShape = ({
    x, y, size, fill, borderWidth, borderColor
}) => (
    <rect
        x={x}
        y={y}
        transform={`rotate(45 ${size/2} ${size/2})`}
        fill={fill}
        strokeWidth={borderWidth}
        stroke={borderColor}
        width={size}
        height={size}
        style={{ pointerEvents: 'none' }}
    />
)
  export default MyResponsivePie