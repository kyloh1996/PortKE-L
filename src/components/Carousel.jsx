import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  margin-top: 320px;
  align-items: center;
`;

const CarouselCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3em;
  margin-bottom: 30em;
`;

const Button = styled.div`
  position: relative;
  height: 20em;
  width: 15em;
  border: 2px solid blueviolet;
  cursor: pointer;
  padding: 15px;
  border-radius: 25px;
  background-size: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103, 238);
    border-right: 2px solid rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
  }

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
`;

const AddButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 700;
  background: #b4f8c8;
  border-radius: 0.5rem;
  border-bottom: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;

  &:hover {
    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103, 238);
    border-right: 2px solid rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
`;

const RotateButton = styled.button`
  margin-bottom: 20em;
  padding: 1rem 2rem;
  font-weight: 700;
  background: #b4f8c8;
  border-radius: 0.5rem;
  border-bottom: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;

  &:hover {
    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103, 238);
    border-right: 2px solid rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2em;
  border-radius: 5em;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 30em; /* Increase the max-width to make the modal wider */

  input {
    width: 100%;
    padding: 0.5em;
    font-size: 1rem;
  }
`;

const LinkButton = styled.a`
  display: block;
  margin-top: 1em;
`;

const Select = styled.select`
  margin-top: 1em;
`;

const Option = styled.option``;

function Carousel() {
  const [projects, setProjects] = useState([
    { id: 'Project1', title: 'Project 1' },
    { id: 'Project2', title: 'Project 2' },
    { id: 'Project3', title: 'Project 3' },
    { id: 'Project4', title: 'Project 4' },
  ]);

  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectData, setNewProjectData] = useState({
    title: '',
    creator: '',
    backgroundStyle: 'color',
    backgroundColor: '#ffffff',
    backgroundImage: '',
    link: '',
  });

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Button clicked: ${sectionId}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addProject = () => {
    const newProject = {
      id: `Project${projects.length + 1}`,
      ...newProjectData,
    };
    setProjects([...projects, newProject]);
    setNewProjectData({
      title: '',
      creator: '',
      backgroundStyle: 'color',
      backgroundColor: '#ffffff',
      backgroundImage: '',
      link: '',
    });
    closeModal();
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  const rotateLeft = () => {
    setCurrentButtonIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1));
  };

  const rotateRight = () => {
    setCurrentButtonIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <Section>
      <Container>
        <RotateButton onClick={rotateLeft}>{'<'}</RotateButton>
        <CarouselCont>
          {projects.slice(currentButtonIndex, currentButtonIndex + 3).map((project) => (
            <Button
              key={project.id}
              onClick={() => handleClick(project.id)}
              visible
              backgroundImage={project.backgroundImage}
              style={{ backgroundColor: project.backgroundColor }}
            >
              <h3>{project.title}</h3>
              <p>{project.creator}</p>
              <DeleteButton onClick={() => deleteProject(project.id)}>Delete</DeleteButton>
              <LinkButton href={project.link} target="_blank">
                Visit Project
              </LinkButton>
            </Button>
          ))}
        </CarouselCont>
        <AddButton onClick={openModal}>+</AddButton>
        <RotateButton onClick={rotateRight}>{'>'}</RotateButton>
      </Container>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Add New Project</h2>
            <form>
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" value={newProjectData.title} onChange={handleInputChange} />

              <label htmlFor="creator">Creator(s):</label>
              <input type="text" name="creator" value={newProjectData.creator} onChange={handleInputChange} />

              <label htmlFor="backgroundStyle">Style:</label>
              <Select name="backgroundStyle" value={newProjectData.backgroundStyle || 'default'} onChange={handleInputChange}>
                <Option value="color">Color</Option>
                <Option value="image">Image URL</Option>
                <Option value="default">Default</Option>
              </Select>

              {newProjectData.backgroundStyle === 'color' && (
                <input
                  type="color"
                  name="backgroundColor"
                  value={newProjectData.backgroundColor}
                  onChange={handleInputChange}
                />
              )}

              {newProjectData.backgroundStyle === 'image' && (
                <input
                  type="text"
                  name="backgroundImage"
                  value={newProjectData.backgroundImage}
                  onChange={handleInputChange}
                />
              )}

              {newProjectData.backgroundStyle === 'default' && (
                <input
                  type="text"
                  name="backgroundImage"
                  value={newProjectData.backgroundImage || './Images/filler.jpeg'}
                  onChange={handleInputChange}
                />
              )}

              <label htmlFor="link">Link:</label>
              <input type="text" name="link" value={newProjectData.link} onChange={handleInputChange} />

              <button type="button" onClick={addProject}>Add</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
}

export default Carousel;
