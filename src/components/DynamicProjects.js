
export default function DynamicProjects({ projectObj }) {



    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
        {projectObj.map((project, index) => (
            <div key={index} className="flex flex-col justify-between items-center w-full h-full bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <div className=" ">
                    <img className="w-48 h-32 md:w-64 md:h-48 object-cover rounded-lg shadow-lg" src={project.image} alt={project.name} />
                    
                </div>
            </div>
        ))}
    </div>
}