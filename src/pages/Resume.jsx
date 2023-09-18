import resumefile from '../assets/nickjeffsresume.pdf'

export default function Resume() {
  return (
    <div className="container pt-4">
      <div className="resumeSection">
        <div className="resumeLinkSection">
          <a href={resumefile} className="resumeLink" download target="blank">Download resume</a>
        </div>

        <div className='skillsSection'>
          <h4>SKILLS:</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/jQuery</li>
                <li>MySQL/NoSQL/GraphQL</li>
                <li>Node.js / Express</li>
                <li>React</li>
            </ul>
        </div>
     </div>
    </div>
  );
}