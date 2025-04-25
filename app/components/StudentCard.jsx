import Image from 'next/image';

const StudentCard = ({ student }) => {
  return (
    <div className="students pb-6 border-b border-[#DBDBDB]">
      <p className='p-5 text-[10px] text-[#7D8DA6] font-[400]'>Students</p>
      <div className="flex justify-between items-center">
        <input type="checkbox" />
        
        <Image
          src={student.imageUrl}
          width={30}
          height={30}
          alt="student"
          className='rounded-full'
        />
        
        <div>
          <p className='text-[14.4px]'>{student.name}</p>
          <p className='text-[10px] text-[#7D8DA6]'>{student.email}</p>
        </div>

        <div className='flex gap-1'>
          <button className='bg-[#FFEDED] p-2 text-[#D83535] border border-[#D09696] rounded text-[9.77px] px-4'>
            Reject
          </button>
          <button className='bg-[#6F01D0] p-2 text-[#FFFFFF] rounded text-[9.77px] px-4'>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
