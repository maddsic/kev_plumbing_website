interface HeadingProps {
   title: string;
   description?: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
   return (
      <div className="px-4 lg:px-8 text-center w-1/3">
         <div className="head-text my-2 text-blue-800">{title}</div>
         <p className="text-md text-gray-700">{description}</p>
      </div>
   );
};
