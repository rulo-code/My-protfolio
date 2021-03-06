import React from 'react';
import './Portfolio.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProjectCard from './ProjectCard/ProjectCard';
import Provider from '../Provider/Provider';
import Crane from '../../assets/crane.png';

const Portfolio = ({ children }) => {
  const portfolio = useSelector((state) => state.user.portfolio);

  return (
    <Provider>
      <div className='portfolio'>

        <div className='portfolio__header'>
          <Link className='go-back home' to='/'>
            <i className='fas fa-angle-double-left' />
          </Link>
          <img src={Crane} alt='crane' />
          <h2>
            My Portfolio
          </h2>
        </div>
        <div className='portfolio__cards-container'>
          {portfolio.map((project) => {
            return (
              <ProjectCard {...project} />
            );
          })}

        </div>

      </div>
    </Provider>

  );
};

export default Portfolio;
