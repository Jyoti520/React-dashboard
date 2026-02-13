import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer,Tooltip,Legend  } from 'recharts'
import ChartSection from '../commonComps/ChartSection';

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

function ProductPerformance() {
  return (
    <ChartSection
    title='Performance by product'
  >
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
      >
        <BarChart data={productPerformanceData}>

          {/* X and Y axes */}
          <XAxis dataKey="name" stroke="#bcbcbc" spacing={4} />
          <YAxis stroke="#bcbcbc"/>

          {/* Tooltip and Legend */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#888d84",
            }}
            itemStyle={{ color: "#D1D5DB" }}
          />
          <Legend  />

          {/* Bar chart with sales data */}
          <Bar dataKey="sales"   stackId={'total'}  fill="#3b82f6" barSize={20}/>
          <Bar dataKey="revenue" stackId={'total'}  fill="#14b8a6" barSize={20}/>
          <Bar dataKey="profit"  stackId={'total'}  fill="#059699" barSize={20}/>
          
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  )
}

export default ProductPerformance