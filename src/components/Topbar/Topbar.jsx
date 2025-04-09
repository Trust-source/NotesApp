import './Topbar.scss'
import { NotebookPen } from 'lucide-react';

function Topbar({menu,setMenu}) {

  
  return (
    <div className='Topbar'>
      <h2 className='Flexi'>FlexiNotes</h2><NotebookPen className='Logo'/>
      </div>
  )
}

export default Topbar