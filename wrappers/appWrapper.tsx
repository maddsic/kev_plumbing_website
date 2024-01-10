interface AppWrapperProps {
   Component: React.ComponentType;
   idName: string;
   classNames: string;
}

const AppWrapper: React.FC<AppWrapperProps> = ({
   Component,
   idName,
   classNames,
}) => {
   const HOC: React.FC = () => {
      return (
         <div id={idName} className={`app__container ${classNames}`}>
            <h1>social media icons</h1>

            <div className="app__wrapper flex items-center justify-center">
               <Component />

               <div className="copyright">
                  <p className="p-text">@2024 Dunedin Plumbing</p>
                  <p className="p-text">All rights reserved</p>
               </div>
            </div>
         </div>
      );
   };

   // Invoke the HOC function and return the result
   return <HOC />;
};

export default AppWrapper;
