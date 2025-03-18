import { useState } from 'react'
import Project from "./Project";
import { ProjectInfo } from 'Interfaces';
import ProjectModal from './ProjectModal';

const Projects = () => {

  const [gcalDetails, setGcalDetails] = useState(false);
  const [bookmarkDetails, setBookmarkDetails] = useState(false);
  const [platformerDetails, setPlatformerDetails] = useState(false);

  const GCAL_PROJECT_INFO: ProjectInfo = {
    name: "Gcal time tracker",
    tools: "JavaScript, Google CardService",
    img: "img/proj3.png",
    gif: "img/timestats.gif",
    desc: "a google workspace add-on which sums up how you've spent your time in google calendar. made with google cardspace API"
  };
  
  const BOOKMARK_PROJECT_INFO: ProjectInfo = {
    name: "Playlist bookmarks",
    tools: "HTML, CSS, JavaScript",
    img: "img/proj2.png",
    gif: "img/bookmarks.gif",
    desc: "a bookmarks manager! you can add, edit, filter, and drag n drop to reorganise. this was made (painfully) with vanilla css and javascript"
  };

  const UNITY_PLATFORMER_INFO: ProjectInfo = {
    name: "unity platformer",
    tools: "C#, Unity",
    img: "img/proj1.png",
    gif: "img/platformer.gif",
    desc: "half-complete platformer i made after getting inspired by celeste. will it ever be finished? no one knows"
  };

  return (
    <div>
      <section className="flex flex-col text-center p-10 pt-15">
        <h1 className='text-3xl'>projects</h1>
        <div className='flex flex-wrap justify-center p-10 items-center gap-5'>

          <Project info={GCAL_PROJECT_INFO} setState={setGcalDetails} />
          <ProjectModal info={GCAL_PROJECT_INFO} open={gcalDetails} setState={setGcalDetails} />
          
          <Project info={BOOKMARK_PROJECT_INFO} setState={setBookmarkDetails}/>
          <ProjectModal info={BOOKMARK_PROJECT_INFO} open={bookmarkDetails} setState={setBookmarkDetails} />

          <Project info={UNITY_PLATFORMER_INFO} setState={setPlatformerDetails}/>
          <ProjectModal info={UNITY_PLATFORMER_INFO} open={platformerDetails} setState={setPlatformerDetails} />

        </div>
      </section>
    </div>
  )
}

export default Projects