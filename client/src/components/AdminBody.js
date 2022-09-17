import LineGraph from './LineGraph'
import Table from './Table'
import { Pie } from './Pie'

export default function AdminBody() {
  return (
    <div className='container mx-auto mt-40 '>
      <div className='grid grid-cols-3 gap-4'>
        <div className='w-full px-4 py-5 bg-white rounded-lg shadow text-[#424B5A] text-align-center '>
          <Pie />
          <hr className='mb-20' />
          <LineGraph />
        </div>

        <div className='w-full px-4 py-5 bg-white rounded-lg shadow col-span-2 '>
          <Table />
        </div>
      </div>
    </div>
  )
}
