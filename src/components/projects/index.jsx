import ProjectLayout from './ProjectLayout';

const ProjectList = ({projects}) => {
    return (
        <div className='w-full max-w-4xl px-4 md:px-8 lg:px-16 py-12 md:py-20 space-y-6 flex flex-col items-center'>
            {projects.length === 0 ? (
                <p className="text-muted text-center">No projects to display yet.</p>
            ) : (
                projects.map((project) => {
                    return <ProjectLayout key={project.id || project.name} {...project} />
                })
            )}
        </div>
    )
}

export default ProjectList;