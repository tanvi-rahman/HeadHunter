import React from 'react'
import {
  ChartBarIcon,
  PencilAltIcon,
  ChatAltIcon,
  CogIcon,
  UserIcon,
  InformationCircleIcon,
  LogoutIcon,
} from '@heroicons/react/outline'

export default function AdminSideBar() {
  return (
    <div className='flex flex-col h-screen p-3  w-60 mt-36 ml-60'>
      <div className='space-y-3'>
        <div className='flex-1'>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <ChartBarIcon className='text-[#707FDD] w-6' />
                <span className='flex-1 ml-3 whitespace-nowrap '>
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <PencilAltIcon className='text-[#707FDD] w-6' />
                <span className='flex-1 ml-3 whitespace-nowrap '>
                  Manage Resources
                </span>
              </a>
            </li>

            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <ChatAltIcon className='text-[#707FDD] w-6' />
                <span className='flex-1 ml-3 whitespace-nowrap '>
                  Review Notes
                </span>
              </a>
            </li>
          </ul>
          <ul className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <CogIcon className='text-[#707FDD] w-6' />

                <span className='flex-1 ml-3 whitespace-nowrap'>Settings</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <UserIcon className='text-[#707FDD] w-6' />

                <span className='flex-1 ml-3 whitespace-nowrap'>Account</span>
              </a>
            </li>

            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <InformationCircleIcon className='text-[#707FDD] w-6' />

                <span className='flex-1 ml-3 whitespace-nowrap'>Help</span>
              </a>
            </li>
            <li>
              <a
                href='/'
                className='flex items-center p-2 text-base font-normal text-[#707FDD] rounded-lg  hover:bg-gray-100 '
              >
                <LogoutIcon className='text-[#707FDD] w-6' />

                <span className='flex-1 ml-3 whitespace-nowrap'>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
