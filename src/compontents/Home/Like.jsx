import React ,{useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import "./Home.css";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from 'react-router-hash-link';


// const [post, setpost] = useState([]);

class Likes extends React.Component {
 

  constructor(props){

    super(props);
    this.state = {
      likes: 0,
      updated: false
    };

  }

  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

  
  render(){

    return(
      <div style={{
        
        display: 'block',
        width:'fit-content'
      }}>
        
       {/* <Button onClick= {this.updateLikes}> <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />}
                    
                   
            name="checkedH" />}
          
        />
        </Button> */}
                        {/* <Link to="/home"> <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: 'gray' }} className='icons' /></Link> */}

        {/* <Link to={`/postid/${post.id}`}> */}
           {/* <FontAwesomeIcon icon={faComment} size="lg" style={{ color: 'gray' }} className='icons' /> */}
           {/* </Link> */}

        
        <div className='like_style'>
        {/* <h4>{this.state.likes}</h4> */}
        {/* <h4>Likes</h4> */}
        </div>
      </div>
    
      // <div>
      //   <button onClick={this.updateLikes}>Like</button>
      //   <p>{this.state.likes}</p>
      // </div>
    );
  }
}

export default Likes;