import Image from "next/image";

export default function EventCard({ event }) {
  const isUpcoming = event.status === "Upcoming";

  return (
    <div >
        <div className="card p-3 bg-[#F9F7FF] rounded-[9.7px] w-[250px]">
        <Image
            src={event.image}
            width={244.07}
            height={10.7}
            alt=""
            className="rounded-[9.7px] h-20 object-cover object-top"
        />

        <div
            className={`w-fit h-fit px-3 text-[9.99px] rounded-[9.99px] mt-2 ${
            isUpcoming
                ? "bg-[#E0DDFF] text-[#1C0AE1]"
                : "bg-[#2AC10033] text-[#1F8B01]"
            }`}
        >
            <p>● {event.status}</p>
        </div>

        <h3 className="text-[16.81px] text-[#595564] font-[400]">{event.title}</h3>

        <div className="flex border-t-1 border-[#D0D5DD] pt-1 justify-between items-center">
            <div className="flex items-center gap-1">
            <Image src="/icons/mynaui_calendar.png" width={8.38} height={8.38} alt="calendar" />
            <p className="text-[8.08px] text-[#595564] font-[500] border-r-1 pr-3 border-[#D0D5DD]">
                {event.date}
            </p>
            </div>
            <div className="flex items-center gap-1">
            <Image src="/icons/Time Icon.png" width={8.38} height={8.38} alt="clock" />
            <p className="text-[8.08px] text-[#595564] font-[500]">{event.time}</p>
            </div>
        </div>

        <div className="flex pt-1 justify-between items-center">
            <div className="flex items-end gap-1">
            <Image
                src={event.groupImage}
                width={11.52}
                height={11.52}
                className="rounded-full h-4 w-4"
                alt="Group Avatar"
            />
            <div>
                <p className="text-[6.47px]">{event.groupLabel}</p>
                <p className="text-[8.08px]">{event.groupName}</p>
            </div>
            </div>
            <div>
            <p className="font-[400] text-[6.47px]">Mentors</p>
            <Image src={event.mentorsImage} width={50} height={20} alt="Mentors" />
            </div>
        </div>

        <div className="flex justify-between mt-2">
            <button className="text-[#6F01D0] rounded-[7.01px] text-[12.27px] p-2 border">
            View Participants
            </button>
            <button
            className={`text-white text-[12.27px] p-2 rounded-[7.01px] ${
                isUpcoming ? "bg-[#6F01D04D]" : "bg-[#6F01D0]"
            }`}
            >
            Join Now ➔
            </button>
        </div>
        </div>
    </div>
  );
}
