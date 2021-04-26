import React, { Component } from 'react'
import './ProjectsContainer.css'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects'

export default class ProjectsContainer extends Component {
    render() {
        return (
            <div className="projects-container">
                {projects.map(project => 
                    <ProjectCard
                        key={project.title} 
                        title={project.title}
                        titleImg={project.titleImg}
                        bgImg={project.bgImg}
                        techs={project.techs} 
                        links={project.links}
                        description={project.description} 
                    />
                )}
            </div>
        )
    }
}
