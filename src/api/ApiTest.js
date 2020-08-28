import React from 'react';
import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/helloworld"

// function ApiTest() {
//     var data;
//     const getAPI = async () => {
//         const temp = await axios.get(USER_API_BASE_URL+'/string');
//         console.log(temp.data);
//         data = temp.data;
//     }   
//     getAPI();
//     console.log(data);
//     // 비동기식을 이해 하자. 어쨌든 이렇게 하면 콘솔로그에는 보여진다. 
//     return (
//         <div className="about__container">
//             <span>
//                 "아오 테스트 좀 하자... "
//             </span>
//             <span>
//                 made by sleepz
//             </span>
//         </div>
//     ); 
// }
// export default ApiTest;


class ApiTest extends React.Component {
    state = {
      isLoading: true,
      data:""
    };
  
  
    getAPI = async () => {
        const temp = await axios.get(USER_API_BASE_URL+'/string');
        console.log(temp.data);
      this.setState({data:temp.data, isLoading: false});    // data <- data 인경우 줄여 쓴다
    }
    componentDidMount() {
      // 영화 데이터 로딩!
      this.getAPI();
  
    }
  
  
    render() {
      const {isLoading, data} = this.state;
      return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {data}    
            </div>
          )}
        </section>  
      );
    }
  }
  export default ApiTest;

