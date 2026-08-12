import Link from "next/link";

const ProjectLayout = ({name, description, date, demoLink}) => {
    return (
        <Link 
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg hover:border-accent/50 transition-all group"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 flex-1">
            <h2 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">
              {name}
            </h2>
            <p className="text-muted text-sm md:text-base">{description}</p>
          </div>

          <div className="hidden md:block self-end flex-1 mx-4 mb-1 bg-transparent border-b border-dashed border-muted" />

          <p className="text-foreground text-sm whitespace-nowrap">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </p>
        </Link>
    )
}

export default ProjectLayout;