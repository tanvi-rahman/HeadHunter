import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './drag-drop.css'
const DropFileInput = props => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.handleFile(e)
      props.onFileChange(updatedList)
    }
  }

  const fileRemove = file => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className='drop-file-input'
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='drop-file-input__label'>
          <p>Drag and drop your resume here</p>
          <img
            src={
              'https://cdn2.iconfinder.com/data/icons/cloud-computing-storage/48/upload-file-512.png'
            }
            alt=''
          />
        </div>
        <input type='file' value='' onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className='drop-file-preview'>
          <p className='drop-file-preview__title'>Ready to submit!</p>
          {fileList.map((item, index) => (
            <div key={index} className='drop-file-preview__item'>
              <img
                src={
                  'https://static.vecteezy.com/system/resources/previews/002/205/865/original/employee-resume-icon-free-vector.jpg'
                }
                alt=''
              />
              <div className='drop-file-preview__item__info'>
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <span
                className='drop-file-preview__item__del'
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
}

export default DropFileInput
