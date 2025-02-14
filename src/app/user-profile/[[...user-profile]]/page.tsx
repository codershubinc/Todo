'use client'
import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => <div
    className='dark:bg-gray-800 dark:text-white bg-gray-100 text-black h-svh  w-full justify-center items-center flex flex-col '
>
    <UserProfile />
</div >

export default UserProfilePage