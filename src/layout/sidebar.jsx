import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="appbar h-full">

      <ul>

          <li className="appbar-title">
            <i>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 16L6.5 12L10.5 8" stroke="#3B9AF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path><path d="M17.5 17L12.5 12L17.5 7" stroke="#3B9AF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path></svg>
            </i>
            ocultar menú
          </li>
    


        <a href="/inputs">
          <li className="appbar-item">
            <i>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 15.5H18C16.895 15.5 16 14.605 16 13.5V13.5C16 12.395 16.895 11.5 18 11.5H20C20.552 11.5 21 11.948 21 12.5V14.5C21 15.052 20.552 15.5 20 15.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 11.5V8.5C20 7.395 19.105 6.5 18 6.5H4.5C3.672 6.5 3 5.828 3 5V5C3 4.172 3.672 3.5 4.5 3.5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 15.5V18.5C20 19.605 19.105 20.5 18 20.5H5C3.895 20.5 3 19.605 3 18.5V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path>
              </svg>
            </i>
            inputs

          </li>          
        </a>

        <a href="/inputs">
          <li className="appbar-item">
            <i>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 15.5H18C16.895 15.5 16 14.605 16 13.5V13.5C16 12.395 16.895 11.5 18 11.5H20C20.552 11.5 21 11.948 21 12.5V14.5C21 15.052 20.552 15.5 20 15.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 11.5V8.5C20 7.395 19.105 6.5 18 6.5H4.5C3.672 6.5 3 5.828 3 5V5C3 4.172 3.672 3.5 4.5 3.5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 15.5V18.5C20 19.605 19.105 20.5 18 20.5H5C3.895 20.5 3 19.605 3 18.5V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path>
              </svg>
            </i>
            inputs

          </li>          
        </a>
        

      </ul>
    </div>
  )
}
