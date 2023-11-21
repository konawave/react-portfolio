import resumefile from '../assets/nickjeffsresume.pdf'
import Card from 'react-bootstrap/Card';
import JSBadge from '../assets/JSBadge.png';
import HTMLBadge from '../assets/HTMLBadge.png';
import ReactBadge from '../assets/ReactBadge.png';
import CSSBadge from '../assets/CSSBadge.png';
import MySQLlogo from '../assets/MySQLlogo.png'


export default function Resume() {
  return (
    <div className="containerpt-4">
      <div className="resumeSection">
        <div className="resumeLinkSection">
          <a href={resumefile} className="resumeLink" download target="blank">Download resume</a>
        </div>
        <div><h4>SKILLS:</h4></div>
        <div className='skillsSection'>
          
            <Card style={{ width: '18rem' }}>
              <Card.Img class="JSCard" variant="top" src={JSBadge} />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                Node.js<br></br>
                ReactJS<br></br>
                Express.js<br></br>
                jQuery<br></br>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img class="JSCard" variant="top" src={CSSBadge} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                Bootstrap<br></br>
                Tailwind<br></br>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img class="JSCard" variant="top" src={ReactBadge}/>
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                ReactJS<br></br>
                React Native<br></br>
                React Bootstrap<br></br>
                Vite<br></br>
                Apollo<br></br>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img class="JSCard" variant="top" src={MySQLlogo} />
              <Card.Body>
                <Card.Title>SQL</Card.Title>
                <Card.Text>
                MySQL, NoSQL<br></br>
                MongoDB<br></br>
                Sequelize<br></br>
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </div>
    </div>
  );
}