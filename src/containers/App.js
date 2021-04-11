import React, { useState } from 'react';
import Icon from '../Components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const itemArray = new Array(9).fill('empty');

const App = () =>{
  // const [count,setCount] = useState(0);
  // const increase = () =>{
  //   setCount(count+1);
  // }
  const [isCross,setIsCross] = useState(false);
  const [winMessage,setWinMessage] = useState("");

  const reloadGame = () =>{
    //reload game
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () =>{
    //check for winner
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0]!=="empty"){
        setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3]!=="empty"){
      setWinMessage(`${itemArray[3]} wins`);
    }else if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[9] && itemArray[6]!=="empty"){
      setWinMessage(`${itemArray[3]} wins`);
    }
    else if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[3]} wins`);
    }
    else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1]!=="empty"){
      setWinMessage(`${itemArray[1]} wins`);
    }
    else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`);
    }
    else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`);
    }
    else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`);
    }
  }

  const changeItem = itemNumber =>{
    //change icons
    if(winMessage){
      return toast(winMessage,{type:"success"});
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross?'cross':'circle';
      setIsCross(!isCross);
    }else{
      return toast("already filled", {type:"error"});
    }
    checkIsWinner();
  }
  return(
    <div>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
          {winMessage? (
            <div className="my-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="sucess" block onClick={reloadGame}>Click to Reload</Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross?'Cross':'Circle'} turn
            </h1>
          ) }
            <div className="grid">
              {itemArray.map((item,index)=>(
                <Card key={item+index} onClick={()=>changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default App;