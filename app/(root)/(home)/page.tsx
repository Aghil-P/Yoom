import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now=new Date();
  const time=now.toLocaleString('en-IN',{hour:'2-digit',minute:'2-digit'});
  const date=(new Intl.DateTimeFormat('en-IN',{dateStyle: 'full'})).format(now);
  
  return (
    <section className="text-white flex flex-col gap-10 size-full">
      <div className="w-full h-[300px] rounded-[20px] bg-hero bg-cover ">
        <div
          className="flex flex-col h-full justify-between
            max-md:py-8 max-md:px-5 lg:p-11"
        >
          <h2
            className="glassmorphism max-w-[270px] rounded py-2 text-center 
              text-base font-normal"
          >
            Upcoming Meeting at: 12:30 PM
          </h2>

          <div>
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
