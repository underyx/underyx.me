import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Labels from '../components/resume/labels'
import Layout from '../components/layout'

const ResumePage = () => (
  <Layout>
    <h2>Bence Nagy's Résumé</h2>
    <p>Versatile engineering at tech startups.<br/>Focus on Python, DevOps, and cultivating culture.</p>
    <h3>Work at Kiwi.com (2015-)</h3>
    <p>
      One of the first 5% of engineers at Kiwi.com,
      scaled our team and tech
      as monthly turnover grew by 12x.
    </p>
    <h4>Roles</h4>
    <ul>
      <li>Software Platform Lead (2018-)</li>
      <li>Senior Software Engineer (2015-2018)</li>
    </ul>
    <h4>Successes</h4>
    <ul>
      <li>Kept the search engine running for half a year as one of the two people in the on-call rotation.
        <Labels primary={["Python", "PostgreSQL", "AWS", "Redis", "Elasticsearch"]} secondary={["Bottle"]} />
      </li>
      <li>Sole developer of the foundations of our data analysis platform, still serving 40+ members of BI and Analytics
        <Labels primary={["Python", "PostgreSQL", "Apache Airflow"]} secondary={["Tableau", "Metabase"]} />
      </li>
      <li>Sole developer of the foundations of an internal HR and ticketing application, used for 3+ years and counting
        <Labels primary={["Python", "Django"]} secondary={["PostgreSQL"]} /></li>
      <li>Rearchitected the largest monolith for better reliability and development velocity. Average unique daily contributors went from 3 to 10.
        <Labels primary={["Python", "Bottle", "AWS", "Docker", "Rancher", "connexion", "Celery"]} secondary={["SQLAlchemy", "GitLab CI", "pytest", "coala", "OpenAPI"]} />
      </li>
      <li>Switched the same monolith to use asynchronous Python. In one day from idea to staging, memory usage dropped by 80%, server load by 55%, and 99th percentile request times by 60%.
        <Labels primary={["Python", "Bottle", "Gevent"]} /></li>
      <li>Implemented product features on search &amp; booking engines directly increasing sales.
        <Labels primary={["Python", "PostgreSQL"]} secondary={["Bottle"]}/></li>
      <li>Led without authority to adopt engineering best practices company-wide. This includes static analysis, test automation, a public by default culture, CI/CD, containers, microservices, innersourcing, asynchronous Python, and many more.
        <Labels primary={["pytest", "Docker", "Kubernetes", "asyncio"]} secondary={["aiohttp", "Slack", "sphinx"]} /></li>
      <li>Wrote our first reference templates for new Python apps, libraries, Docker images, GitLab CI pipelines.
        <Labels primary={["Python", "cookiecutter", "Docker", "GitLab CI"]} secondary={["aiohttp", "Slack", "sphinx"]} /></li>
      <li>Designed and developed our deployment automation tool, <OutboundLink href="https://github.com/kiwicom/crane">Crane</OutboundLink>.
        <Labels primary={["Python", "Rancher"]} secondary={["click", "Docker", "GitLab CI"]} /></li>
      <li>Led development of our microservice directory, <OutboundLink href="https://github.com/kiwicom/the-zoo">The Zoo</OutboundLink>.
        <Labels primary={["Python", "Django"]} secondary={["PostgreSQL"]} /></li>
      <li>Led the Software Platform Squad to build many more things on all of the above.</li>
    </ul>
    <h4>Failures</h4>
    <ul>
      <li>Implemented an internal data pipeline execution framework.<br/><strong>I shut it down</strong> as it was inferior to Apache Airflow in every way.</li>
      <li>Wrote a tool to gather news announced by other departments in random places, and aggregate them in Slack channels.<br/><strong>I shut it down</strong> as all the scraping and automated data cleaning wasn't sustainable, and it didn't entice people to manually correct the announc.</li>
      <li>Many more that were valuable lessons but aren't grand enough to make this list.</li>
    </ul>
    <h4>Proudest Moment</h4>
    <p>My proudest moment is that after 3 years I spent at Kiwi.com, we polled engineers on what their values are, and "Transparency" was the number one response, much unlike when I joined. After spending years preaching, fighting for an open company culture, I feel like this is somewhat of a personal accomplishment of sorts, even if I obviously can't just take credit for it.</p>
    <h3>Education</h3>
    <p>Entirely self-taught since 2012.</p>
    <h3>Future</h3>
    <ul>
      <li>Golang</li>
      <li>Machine Learning</li>
      <li>Unity</li>
    </ul>
  </Layout>
)

export default ResumePage
