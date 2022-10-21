import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div  id="achievement" style={{backgroundColor: theme.secondary}}>
                {/* <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Achievements</h1>
                </div> */}
                {/* <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div> */}
                {/* <div style={{"margin":"auto"}}><h1 style={{color: theme.primary}}>Achievements</h1></div> */}
                <div style={{"display":"flex","justifyContent":"center", "margin":"auto"}} className="achievement-body">
                <div style={{"margin":"auto"}}>
                     <h1 style={{color: theme.primary}}>Statistic</h1> 
                </div>
                 
                </div><br/>
                <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center", "gap":"20px","flexWrap":"wrap"}}>
                    <div><img style={{"width":"100%","height":"auto","margin":"10px"}} src='https://github-readme-stats.vercel.app/api?username=Sharmacs8853&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=ture&text_color=808080' alt='' /></div>
                    <div><img style={{"width":"100%","height":"auto","margin":"10px"}} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=sharmacs8853&" alt="sharmacs8853" /></div>
                </div>

                <br/><br/>
                <div style={{"display":"flex","justifyContent":"center", "margin":"auto"}} className="achievement-body">
                <div style={{"margin":"auto"}}>
                     <h1 style={{color: theme.primary}}>My GitHub Calender</h1> 
                </div>
                 
                </div><br/>
                <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center", "gap":"20px"}}>
                    <div><img style={{"width":"100%","height":"auto","margin":"10px","borderRadius":"10px"}} src='https://pbs.twimg.com/media/Fd56dFtUAAAqn1W.png' alt='' /></div>
                </div>

               
                
            </div>
            )}
        </>
    )
}

export default Achievement
