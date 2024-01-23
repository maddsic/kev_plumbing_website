import CountUp from "react-countup";

interface CounterProps {
   number: number;
   title?: string;
   suffix?: string;
}

export const Counter = ({ number, title, suffix }: CounterProps) => {
   return (
      <div className="flex flex-col justify-center items-center">
         <CountUp
            duration={10}
            end={number}
            suffix={suffix}
            className="text-5xl text-black my-3 font-bold"
         />
         <p className="gray-text">{title}</p>
      </div>
   );
};
