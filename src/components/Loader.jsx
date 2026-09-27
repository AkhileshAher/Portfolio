export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-white"> 
            <img src="/loader.png" alt="Loading" className="h-50 w-50 animate-spin object-contain" />
         </div> 
         ); 
        }