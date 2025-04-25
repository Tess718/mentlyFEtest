import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserChart = () => {
  const data = {
    labels: ['Students', 'Mentors', 'Programs', 'Others'],
    datasets: [
      {
        data: [200, 8, 22, 10],
        backgroundColor: ['#4A90E2', '#7ED6DF', '#F78FB3', '#FEC260'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex items-center flex-col lg:flex-row justify-between px-3 py-6 gap-2 w-full">
      <div className="basis-1/2">
        <div className="relative xl:w-full xl:h-35">
          <Doughnut data={data}
          options={options}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">240</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="mt-4 space-y-1 w-full">
          <div className="flex justify-between items-center">
            <div className='flex gap-2 items-center'>
              <span className="inline-block w-[8px] h-[8px] bg-[#62B2FD] rounded-full"></span>
                <p className="text-[10px] font-[400] text-[#595564] p-0 m-0">Students</p>

            </div>
              <p className="text-[12px] font-[700] text-[#595564]">200</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[8px] h-[8px] bg-[#9BDFC4] rounded-full"></span>
                <p className="text-[10px] font-[400] text-[#595564] p-0 m-0">Mentors</p>
            </div>
              <p className="text-[12px] font-[700] text-[#595564]">8</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[8px] h-[8px] bg-[#F99BAB] rounded-full"></span>
              <p className="text-[10px] font-[400] text-[#595564] p-0 m-0">Programs</p>
            </div>
                <p className="text-[12px] font-[700] text-[#595564]">22</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[8px] h-[8px] bg-[#FFB44F] rounded-full"></span>
                <div>
                <p className="text-[10px] font-[400] text-[#595564] p-0 m-0">Others</p>
                </div>

            </div>
                  <p className="text-[12px] font-[700] text-[#595564] text-end">10</p>
            </div>      
        </div>
      </div>
    </div>
  );
};

export default UserChart;
