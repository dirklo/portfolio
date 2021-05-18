import React from 'react'

import './ProjectsContainer.css'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects'



function ProjectsContainer() {
    return (
        <div
            className="projects-container"
            id="projects">
            {projects.map(project => 
                <ProjectCard
                    key={project.title} 
                    title={project.title}
                    titleImg={project.titleImg}
                    bgImg={project.bgImg}
                    techs={project.techs} 
                    links={project.links}
                    description={project.description}
                    bullets={project.bullets}
                />
            )}
        </div>
    )
}

export default ProjectsContainer