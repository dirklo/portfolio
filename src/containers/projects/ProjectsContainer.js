import React from 'react'

import './ProjectsContainer.css'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects'



function ProjectsContainer(props) {
    return (
        <div
            className={props.loading ? 'projects-container loading' : 'projects-container'}
            id="projects"
        >
            <h1>My Projects</h1>
            <div className="projects-list">
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
        </div>
    )
}

export default ProjectsContainer