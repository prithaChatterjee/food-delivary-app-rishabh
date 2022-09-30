import React from 'react'  
import ReactDOM from 'react-dom'  
import { StyleModal } from './style.modal'

const ModalDispaly = ({children}) => <StyleModal><section>{children}</section></StyleModal>
  
function Modal({children, open}){  
    if (!open) return
    return ReactDOM.createPortal(  
      <ModalDispaly>{children}</ModalDispaly>,  
      document.getElementById('modal')  
    )  
}  
export default Modal  