import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { GlobalContext } from '../context/GlobalState';
export default function ModalPopover() {
  const [show, setShow] = useState(false);
  const [income,setincome]=useState(false)
  const [Category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);
  const handleClose = () => {
   
    setShow(false)
  };
  const handleShow = (text) =>{ 
    
    if(text=='income'){
      setincome(true)
    }
    else{
      setincome(false);
    }
    setShow(true);
  }

  const incomeexpense=(e)=>{
    e.preventDefault();
    if(income==true){
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      Category,
      amount: +amount
    }
  
    addTransaction(newTransaction);
  }
  else{
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      Category,
      amount: -amount
    }
    addTransaction(newTransaction);
  }
}

  return (
    <>
    <div className='income_expense'>
      <Button variant="primary" onClick={()=>{handleShow('income')}}>
        Income 
      </Button>
      <Button variant="primary" onClick={()=>{handleShow('expense')}}>
        Expense 
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{income?<div>Income</div>:<div>Expense</div>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" onChange={(e)=>{
      
      setCategory(e.target.value)
        }}>
          </Form.Control>
   
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Amount" onChange={(e)=>{
           setAmount(e.target.value);
        }}/>
      </Form.Group>
    
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>{
            handleClose(e);incomeexpense(e)
          }}>
            Add Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

