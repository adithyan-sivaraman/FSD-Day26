
import './App.css';
import './Style.css'
import image from './assets/profile.svg'
import rocket from './assets/rocket.svg'
import CreateTeacher from './Components/Teacher/Add';
import DeleteTeacher from './Components/Teacher/Delete';
import ViewTeacher from './Components/Teacher/View';
import ModifyStudent from './Components/Student/Modify';
import ModifyTeacher from './Components/Teacher/Modify';
import CreateStudent from './Components/Student/Add';
import DeleteStudent from './Components/Student/Delete';
import ViewStudent from './Components/Student/View';
import Dashbord from './Components/Dashboard';
import {useState,useEffect} from 'react';

function App() {

  useEffect(()=>{
  const showComp = localStorage.getItem('showComp');
  if(!showComp){
    localStorage.setItem('showComp','');
  }
  },[])

  const [isActive,setActive] = useState(null)
 
  const handleClick = (elementId) =>{
    if (elementId === isActive) {
      setActive(null); // Close the clicked element if already active
    } else {
      setActive(elementId); // Open the clicked element
    }
  }
const [divVisible,setDivVisible] = useState('component')
  const showComponent=(id)=>{
    const showComp = localStorage.getItem('showComp');

    if(showComp!==String(id)) {
      setDivVisible(`component${id}`)
      localStorage.setItem('showComp',id);
    }
    
  }
  
  return (
    <div className="App">
      <div className='min-h-screen w-screen flex'>
        <div className='w-24 md:w-60 min-h-screen sidebar  '>
          <a className='flex items-center justify-center text-base font-extrabold text-white px-4 py-6 a-1' >
            <div className='sidebar-brand rotate-n-15'><i className="fas fa-laugh-wink icon"></i></div>
            <div className='hidden md:inline ml-4'>SB ADMIN<sup className='font-extrabold'>2</sup></div>
          </a>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <a className='flex items-start justify-start text-base font-extrabold text-white md:px-4 md:py-2 ' >
            <div className='sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full'>
              <i className="fas fa-fw fa-tachometer-alt text-sm w-1/10 text-center"></i>
              <button 
              onClick={()=>showComponent('')}
              type='button'
              className="text-xs md:text-base font-bold mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4">Dashboard</button>
            </div>

          </a>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />

          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer'  onClick={()=>handleClick('div1')}>
            <div className='sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full'>
              <i className="fas fa-fw fa-cog w-1/10 text-center"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4 tracking-wider">Teachers</span>
              <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
              
            </div>
            {isActive==="div1" && (
              <div  className='flex flex-col bg-white mt-2 rounded-md  w-full justify-start'>
              <button type='button' 
                onClick={()=>showComponent(1)}
                className='text-black px-2 py-2 tracking-wider text-left'>Create</button>
              <button type='button' 
                onClick={()=>showComponent(2)}
                className='text-black px-2 py-2 tracking-wider text-left'>Modify</button>
              <button type='button' 
                onClick={()=>showComponent(3)}
                className='text-black px-2 py-2 tracking-wider text-left'>View</button>
              <button type='button' 
                onClick={()=>showComponent(4)}
                className='text-black px-2 py-2 tracking-wider text-left'>Delete</button>
              </div>
            )}
             
            
          </div>
          <div className='flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer' onClick={()=>handleClick('div2')}>
            <div className='sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full'>
              <i className="fas fa-fw fa-cog w-1/10 text-left"></i>
              <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4 tracking-wider">Students</span>
              <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
            </div>
         
            {isActive==="div2" && (
              <div  className='flex flex-col bg-white mt-2 rounded-md  w-full ' >
              <button type='button' 
                onClick={()=>showComponent(5)}
                className='text-black px-2 py-2 tracking-wider text-left'>Create</button>
              <button type='button' 
                onClick={()=>showComponent(6)}
                className='text-black px-2 py-2 tracking-wider text-left'>Modify</button>
              <button type='button' 
                onClick={()=>showComponent(7)}
                className='text-black px-2 py-2 tracking-wider text-left'>View</button>
              <button type='button' 
                onClick={()=>showComponent(8)}
                className='text-black px-2 py-2 tracking-wider text-left'>Delete</button>
              </div>
            )}
          
          </div>
          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
         
         
         
          

          <hr className='border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0' />
          <div className='text-center hidden md:flex items-center justify-center mt-4 '>
            <button className='rounded-full text-white w-10 h-10 button' type='button' id="toggleBtn">
            
            </button>

          </div>
          <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={rocket} alt="..."/>
                <p className="text-center mb-2 text-xs color"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
        </div>
        <div className=' border-blue-300 content'>

          <nav className='a-1 shadow bg-white py-2 px-4 w-full flex flex-row items-center justify-center'>
            <button id="sidebarToggleTop" className="block md:hidden btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>
            <div className='w-1/2 flex justify-center items-center h-full'>
              <form className='hidden md:inline-block md:ml-4 !mr-auto !mt-2 w-full a-1 h-full'>
                <input type='text' className='text-sm input-group h-1/2 w-4/5 px-4 rounded-md input mt-2' placeholder='Search for ...' />
                <div className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </div>
              </form>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center nav'>
              <a className='a-1 flex items-center px-3' role='button'>
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter ml-1">3+</span>
              </a>
              <a className='a-1 flex items-center px-3' role='button'>
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter ml-2">7</span>
              </a>
              <div className="topbar-divider hidden md:block"></div>
              <a className='a-1 flex items-center px-3' role='button'>
                <span className='hidden lg:inline'>Adithyan S</span>
                <img className="img-profile rounded-full w-8 h-8 ml-2" src={image} alt='' />
              </a>
            </div>
          </nav>
       

          {/*render card component here*/}
          {/*<Card />*/}
          
          {divVisible==='component' && <Dashbord onClickButton={(id)=>showComponent(id)} />}
          {divVisible==='component1' && <CreateTeacher />}
          {divVisible==='component2' && <ModifyTeacher />}
          {divVisible==='component3' && <ViewTeacher />}
          {divVisible==='component4' && <DeleteTeacher />}
          {divVisible==='component5' && <CreateStudent />}
          {divVisible==='component6' && <ModifyStudent />}
          {divVisible==='component7' && <ViewStudent />}
          {divVisible==='component8' && <DeleteStudent />}
          <div className='flex flex-col lg:flex-row w-full' id='temp1'>
            
        
          </div>

          <div>

          </div>
         
         {/* <div className='flex bg-white h-12 items-center justify-center flex-row px-4'>
            <footer className="sticky-footer bg-white w-4/5">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2023</span>
                </div>
              </div>
            </footer>
            <a className="scroll-to-top rounded-md" href="#page">
              <i className="fas fa-angle-up"></i>
            </a>
          </div> */}
         
        </div>


      </div>

    </div>
  );
}

export default App;
