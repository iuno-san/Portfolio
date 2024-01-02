import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Projects🍂</Title>
        <Desc>
          I have worked on a wide range of web applications. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'dotnet app' ?
            <ToggleButton active value="dotnet app" onClick={() => setToggle('dotnet app')}>.NET App's</ToggleButton>
            :
            <ToggleButton value="dotnet app" onClick={() => setToggle('dotnet app')}>.NET App's</ToggleButton>
          }
          <Divider />
          {toggle === 'react app' ?
            <ToggleButton active value="react app" onClick={() => setToggle('react app')}>React App's</ToggleButton>
            :
            <ToggleButton value="react app" onClick={() => setToggle('react app')}>React App's</ToggleButton>
          }
          <Divider />
          {toggle === 'live app' ?
            <ToggleButton active value="live app" onClick={() => setToggle('live app')}>Live App's</ToggleButton>
            :
            <ToggleButton value="live app" onClick={() => setToggle('live app')}>Live App's</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || (Array.isArray(project.category) ? project.category.includes(toggle) : project.category === toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={project.id} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects