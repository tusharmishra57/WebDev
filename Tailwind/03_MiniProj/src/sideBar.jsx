export function SideBar()
{
    return <div className="flex">
        <div className="transition-all duration-1000 w-0 md:flex-1 bg-blue-300 dark:bg-blue-600 h-screen">
            SideBar
        </div>
        <div className = "flex-4 h-screen bg-red-300 dark:bg-red-600 ">
            Content
        </div>
    </div>
        
}