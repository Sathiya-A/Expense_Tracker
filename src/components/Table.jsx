import { useEffect,useContext,useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function Table(){
  const { deleteTransaction } = useContext(GlobalContext);
  const {transactions} = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [index,setindex]=useState();
  const [amount,setAmount]=useState()
  const [income,setincome]=useState(false);
  const {editTransaction } = useContext(GlobalContext);
  const handleClose = () => {
   
    setShow(false)
  };
  const handleedit=(id)=>{
   setShow(true);
   setindex(id);
   if(transactions[id].amount>0){
    setincome(true)
   }
   
  }
  const edittransaction=()=>{
    let obj={}
    if(income==true){
     obj={
      id:transactions[index].id,
      Category:transactions[index].Category,
      amount:amount
    }
  
  }
  else{
     obj={
      id:transactions[index].id,
      Category:transactions[index].Category,
      amount:-amount
    }
  }
     editTransaction(index,obj)
   
  }
 
    return(
 <div style={{height:'300px',overflowY:'scroll'}}>
            <table className="table" style={{height:'300px',overflowY:'scroll'}}>
  <thead>
    <tr>
    
      <th scope="col">Category</th>
      <th scope="col">Expense</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  {transactions.length==0?<div className='transaction_history'>Transaction history will be listed here</div>:
  <tbody>
   
  {transactions.map((transaction,index)=>{
   
    return(
       <tr key={index}>
  
       <td>{transaction.Category}</td>
       <td>£{transaction.amount}</td>
       <td>
       <button className="btn btn-danger" onClick={() => deleteTransaction(transaction.id)}>Delete</button>
       </td>
       <td>
       <button type="button" className="btn btn-primary" onClick={()=>{
      
            handleedit(index)
          }}>Edit</button>
       </td>
     </tr>
    )
    })}
   
  </tbody>
}
</table>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Amount" onChange={(e)=>{
         
           setAmount(parseInt(e.target.value));
        
        }}/>
      </Form.Group>
    
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            edittransaction()
            handleClose();
          }}>
            Edit the  Transaction
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}