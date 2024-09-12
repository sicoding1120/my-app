import { useIcons } from '@/hook/useIcons';
import { useRouter } from 'next/router';
import React from 'react'
import { MdSignalCellular1Bar } from 'react-icons/md';

const CardDemo = () => {
  const { icons } = useIcons();
  const router = useRouter();
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-full h-1/2 bg-red-500 p-4">
        <div></div>
      </div>
      <div className="p-4 flex flex-col justify-between w-full h-1/2 ">
        <h3 className="text-xl font-semibold capitalize">javascript</h3>
        <div className='flex gap-4 items-center font-semibold capitalize'>
          <MdSignalCellular1Bar />
          basic
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <icons.book size={20} />
            12 lesson
          </div>
          <div className="flex gap-2 items-center">
            <icons.timer size={20} />3 hr 35 min
          </div>
        </div>
        <button className='btn w-full capitalize' onClick={() =>router.push('/courses/class/javascript') }>detail kelas</button>
      </div>
    </div>
  );
}

export default CardDemo