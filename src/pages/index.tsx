import React from 'react';
import Head from 'next/head';

import TopMenu from '../components/TopMenu';

import {
  Container,
  Content,
  AboutCard,
  AboutInfo,
  Resume,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const educations = [
    {
      date: '2020 - 2023',
      course: "Bachelor's Degree in Computer Science",
      university: 'UNIVESP (Ribeirão Preto - BR)',
    },
    {
      date: '2012 - 2016',
      course: "Bachelor's Degree in Industrial Design",
      university: 'UNESP (Bauru - BR)',
    },
    {
      date: '2014 - 2015',
      course: 'Exchange Student in Industrial Design',
      university: 'California College of the Arts (San Francisco - US)',
    },
  ];

  const experiences = [
    {
      date: '2020 - Today',
      job: 'Javascript Fullstack Developer - Bluestorm Studios',
    },
    {
      date: '2014 - 2020 ',
      job: 'Industrial Designer - Freelancer',
    },
    {
      date: '2016 - 2018 ',
      job: 'Industrial Designer - FK Grupo',
    },
    {
      date: '2014 - 2016 ',
      job: 'Co-Founder and Photographer - Tertulia Fotografia',
    },
  ];

  const courses = [
    {
      name: 'GoStack Bootcamp',
      tutor: 'Rocketseat',
    },
    {
      name: 'Complete Intro to React, v5',
      tutor: 'Frontend Masters',
    },
    {
      name: 'Intermediate React, v2',
      tutor: 'Frontend Masters',
    },
    {
      name: 'LaunchBase Bootcamp',
      tutor: 'Rocketseat',
    },
    {
      name: 'Functional Programing with ES6',
      tutor: 'Linkedin Learning',
    },
    {
      name: 'Omnistack Week 10.0',
      tutor: 'Rocketseat',
    },
    {
      name: 'NextLevel Week 1.0',
      tutor: 'Rocketseat',
    },
    {
      name: 'Omnistack Week 11.0',
      tutor: 'Rocketseat',
    },
  ];

  return (
    <div>
      <Head>
        <title>Victor Alvarenga</title>
      </Head>

      <main>
        <Container>
          <TopMenu />
          <Content>
            <AboutCard>
              <img src="/avatar.jpg" alt="Victor Alvarenga" />
              <AboutInfo>
                <span>Hello,</span>
                <p>
                  I am Victor Alvarenga, a Fullstack Developer with Industrial
                  Design Background, having worked for over 6 years in product
                  development, knowledge which today I use to expand my
                  capabilities as a developer. Merging my design know-how with
                  my programing skills to deliver projects that are both
                  functional and user friendly.
                </p>
              </AboutInfo>
            </AboutCard>

            <Resume>
              <section>
                <h2>Education</h2>
                <ul>
                  {educations.map((item) => (
                    <li key={item.course}>
                      <div className="course">
                        <span>{item.date}</span>
                        <h4>{item.course}</h4>
                      </div>
                      <p>{item.university}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Professional Experience</h2>
                <ul>
                  {experiences.map((item) => (
                    <li key={item.job}>
                      <div className="experience">
                        <span>{item.date}</span>
                        <h4>{item.job}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Courses</h2>
                <ul>
                  {courses.map((item) => (
                    <li key={item.name}>
                      <div className="courses">
                        <span>{`${item.name} - ${item.tutor}`}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Resume>
          </Content>
        </Container>
      </main>
    </div>
  );
};

export default Home;
