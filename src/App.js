import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const nayoks = ['Anowar' , 'Jafor Iqbal ' , ' Alomgir' , ' Salman']
    const products =[
      {name: 'photoshop' , price: '$90.99'},
      {name: 'PDF Reader' , price:'$6.99'},
      {name: 'Illustrator' , price: '$60.99'},
      {name: 'Premier EI' , price: '$234'}
    ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {

            nayoks.map(nayok => <li>{nayok}</li>)

          }

          {

            products.map(product => <li>{product.name} : {product.price} </li>)

          }

          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>

          {
            products.map(product => <Product product={product}></Product>) 
          }


        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna " job="Football "></Person>
        <Person name="MAsum" job="Dorsok"></Person>
        <Person></Person>
      
      </header>
    </div>
  );
}

function Counter()
{
  const [ count, SetCount] = useState(10) ;
  const handleIncrease = () => {
    const newCount = count + 1 ;
    SetCount ( newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => SetCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users()
{
  const [users , setUser] = useState([]) ;
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  } ,[])
  
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
     <ul>
       {
         console.log(users) 
       }
       {
         users.map( user => <li>{user.email} </li>  )
       }
     </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
 const {name , price} = props.product ;
 console.log(name , price);
  return(
    <div style={productStyle}>
        <h3>{props.product.name} </h3>
        <h5>{props.product.price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: '2px solid gold' , width:'400px' , margin: '5px'}}>
      <h3>My Name : {props.name} </h3>
      <p>My profession: {props.job} </p>
    </div>
  )
}


export default App;
