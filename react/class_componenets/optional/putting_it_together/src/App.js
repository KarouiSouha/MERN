import Putting_it_Together from "./components/Putting_it_Together"; 
const data=[{
  firstName:'Doe',
  lastName:'Jane',
  age:50,
  haircolor:'Black'
},
{
  firstName:'Smith',
  lastName:'john',
  age:88,
  haircolor:'Brown'
},
{  firstName:'Fillmore',
lastName:'Millard',
age:50,
haircolor:'Brown'},
{
  firstName:'Smith',
  lastName:'Maria',
  age:62,
  haircolor:'Brown'
}
]
function App() {
  return (
    <div className="App">
      {data.map((person,idx)=>{
      return <Putting_it_Together person={person} key={idx}/>
    })
    } 
    </div>
  );
}

export default App;
