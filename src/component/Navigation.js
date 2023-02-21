import { Menubar} from 'primereact/menubar';
import LanguageSelect from './languaggeSelect';

const navlist = [
    {label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
        window.location.href='/home';
    }},
    {label: 'Test', icon: 'pi pi-fw pi-calendar', command: () =>{
        window.location.href='/test'
    }},
    { label: 'Contact', icon: 'pi pi-fw pi-phone', command: () =>{
        window.location.href='/contact'
    }}
  ];
  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
  const end = <LanguageSelect/>;  
const Navigation = () => {
    return(
        <div  className="card">
           
                    <Menubar model={navlist} start={start} end={end}/>
             
         
        </div>
    )
}

export default Navigation;