import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function Table() {
  const [searchTerm, setSearchTerm] = useState('')
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/resumes')
      .then(res => {
        setResumes(res.data)
        console.log('Table', resumes)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className=''>
      {/* Search */}
      <div className='flex mx-auto w-full px-3'>
        <div className='flex justify-between items-center w-full h-full'>
          <div>
            <h1 className='text-3xl text-[#424B5A]'>Applicants</h1>
          </div>
          <div className='flex border-2 rounded-3xl text-[#424B5A]'>
            <button className='flex items-center justify-center px-4 border-r '>
              <svg
                className='w-6 h-6 text-gray-600'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
              </svg>
            </button>
            <input
              type='text'
              className='px-4 py-2 w-80 rounded-3xl'
              placeholder='Search...'
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className='mt-5'>
        <div className='border-b border-gray-200  '>
          <table className='table-auto'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Name</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Email</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Number</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Applied On</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Resume URL</th>
              </tr>
            </thead>

            <tbody className='bg-white'>

              {resumes.filter(val => {
                    if (searchTerm === "") {
                      return val
                    } else if (val.content.includes(searchTerm)) {
                      return val
                    }
                  }).map(resume => (
                <tr className=''>
                  <td className='px-6 py-4 text-sm text-gray-500'>
                    {resume._id.substring(1, 5)}
                  </td>
                  <td className='px-6 py-4'>{resume.author}</td>
                  <td className='px-6 py-4'>{resume.email}</td>
                  <td className='px-6 py-4'>{resume.number}</td>
                  <td className='px-6 py-4'>{resume.appliedOn}</td>
                  <td className='px-6 py-4'>🔗</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
