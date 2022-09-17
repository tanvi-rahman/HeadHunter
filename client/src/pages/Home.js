import { React, useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import DropFileInput from '../components/DragDrop'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const notify = () => toast.success('Uploaded Successfully!')

  const [data, setData] = useState({
    author: '',
    email: '',
    number: '',
  })

  const [file, setFile] = useState(null)

  const handleForm = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleFile = event => {
    const newData = { ...data }
    const file = event.target.files[0]
    setFile(file)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const sampleFile = file
    var bodyFormData = new FormData()
    bodyFormData.append('author', data.author)
    bodyFormData.append('email', data.email)
    bodyFormData.append('number', data.number)
    bodyFormData.append('sampleFile', sampleFile)

    axios({
      method: 'post',
      url: '/upload',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        notify()
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/resumes')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className='text-5xl font-bold text-[#424B5A]'>
            Upload your resume!
          </h2>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <form onSubmit={e => handleSubmit(e)}>
              {/* <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'> */}
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                placeholder='Full Name'
                id='author'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                id='email'
                placeholder='Email'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                id='number'
                placeholder='Phone Number'
                onChange={e => handleForm(e)}
              />
              <DropFileInput
                onFileChange={e => handleFile(e)}
                setFile={setFile}
                handleFile={handleFile}
              />
              <br />
              <button
                type='submit'
                className='text-white bg-[#707FDD] w-6/12	 text-center py-3 rounded-2xl  my-1'
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  )
}
